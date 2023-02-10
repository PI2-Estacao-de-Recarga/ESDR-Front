import React, { useState } from "react";
import {
  Alert,
  Text,
  Modal,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback, Keyboard, ScrollView, RefreshControl, BackHandler
} from 'react-native';
import styles from './styles';
import Balance from '../../components/balance';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';
import { useNavigation } from '@react-navigation/native';
import RadioButton from "../../components/radioButton";
import NavbarComponent from '../../components/navbarComponent';
import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { getToken } from "../../utils/getToken";
import jwt_decode from 'jwt-decode';
import { paymentRepository } from "../../domain/repositories/paymentRepository";
import { plugRepository } from "../../domain/repositories/plugRepository";
import { queryClient } from "../../../App"
import axios from 'axios';
import { Pressable } from 'react-native';

const HomePage = ({ route }) => {
  const navigation = useNavigation();
  const [carregarOption, setCarregarOption] = useState(false);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [creditAmount, setCreditAmount] = useState(0);
  const [plugName, setPlugName] = useState("")
  const [disabled, setDisabled] = useState(true);
  const [plugInUse, setPlugInUse] = useState([])
  const [userPlugs, setUserPlugs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUserPlug = async (Token, UserId) => {
    setUserPlugs([]);
    return plugRepository.getPlug(Token, UserId, true)
      .then((res) => {
        // console.log("getUserPlug:: ", res.data);
        setUserPlugs(getUserTomada(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getPlugs = async (Token) => {
    setPlugInUse([]);
    return plugRepository.getPlug(Token, "", true)
      .then((res) => {
        // console.log("getPlugs:: ", res.data);
        setPlugInUse(getTomadas(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Espere um pouco!', 'Certeza que deseja voltar? voce será desconectado', [
        {
          text: 'Cancelar',
          onPress: () => { },
          style: 'cancel',
        },
        { text: 'Deslogar', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const deactivatePlug = async (plugName) => {
    console.log("Deactivate plugName:: ", plugName);
    const plugEsp = plugName.substring(0, 1) + plugName.substring(7, 8);
    const resp = axios({
        url: `http://192.168.4.1/${plugEsp}`,
        method: "GET",
        timeout: 10000,
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
        }
      }).then((response) => {
        console.log("Deu certo", response.data);
        mutationDeactivatePlug.mutate(plugName)
      }).catch((error) => {
        console.log("Error", error.response.data);
      })
    // mutationDeactivatePlug.mutate(plugName);
  }

  const checkTimeLeft = (tomada) => {
    const tomadaUseFinish = new Date(tomada.useFinish);
    const now = new Date();
    const differenceInMs = tomadaUseFinish.valueOf() - now.valueOf();
    const differenceInMinutes = differenceInMs / 60000;
    const hours = Math.floor(differenceInMinutes / 60);
    const minutes = Math.floor(differenceInMinutes % 60);
    console.log("hours:: ", Number(hours), "minutes:: ", Number(minutes), differenceInMs < 0)
    return Number(hours) < 0 && Number(minutes) < 0;
  }

  const checkPlugsTime = () => {
    plugInUse.map((item) => {
      if (checkTimeLeft(item)) {
        deactivatePlug(item.name);
      }
    })
  }

  const checkUserPlugsTime = () => {
    if (plugInUse.length == 0) {
      console.log("entrou")
      console.log("userPlugs:: ", userPlugs)
      userPlugs.map((item) => {
        if (checkTimeLeft(item)) {
          deactivatePlug(item.name);
        }
      })
    }
  }

  const resetNavigationHistory = () => {
    const navigationState = navigation.getState();
    navigationState.history = [];

    navigation.reset(navigationState);
  }

  useEffect(() => {
    resetNavigationHistory();
    setLoading(true);

    const Token = getToken();
    setToken(Token);
    // console.log('token:: ', token);
    var decoded = jwt_decode(Token);
    setUserId(decoded.userId);

    setTimeout(() => {
      getPlugs(Token);
      console.log("getPlugs:: ", plugInUse)
      checkPlugsTime();
    }, 1000);

    setTimeout(() => {
      getUserPlug(Token, decoded.userId);
      checkUserPlugsTime();
    }, 2000);

    setLoading(false);
  }, [])

  useEffect(() => {
    if (creditAmount != 0 && plugName != "")
      setDisabled(false)
    else
      setDisabled(true)
  }, [creditAmount])

  function getTomadas(listOfuserPlugs) {
    var auxList = []
    listOfuserPlugs.forEach(item => {
      auxList.push({
        name: item.name,
        useFinish: item.dateTimeToDeactivate,
      })
    });

    // console.log("getTomadas:: ", auxList)
    return auxList;
  }

  function getUserTomada(listOfuserPlugs) {
    var auxList = []
    listOfuserPlugs.forEach(item => {
      auxList.push({
        name: item.name,
        useFinish: item.dateTimeToDeactivate,
      })
    });

    // console.log("getUserTomadas:: ", auxList)
    return auxList;
  }

  const mutationDeactivatePlug = useMutation((plugName) => plugRepository.setPlug(token, userId, 0, plugName), {
    onSuccess: async (data) => {
      console.log("data", data);
    },
    onError: (error) => {
      Alert.alert(error.response.data.error)
      console.log(error.response.data.error)
    }
  });

  const mutationPlug = useMutation(() => plugRepository.setPlug(token, userId, creditAmount, plugName), {
    onSuccess: async (data) => {
      // console.log("data", data);
      mutationOperation.mutate();
    },
    onError: (error) => {
      Alert.alert(error.response.data.error)
      console.log(error.response.data.error)
    }
  });

  const mutationOperation = useMutation(() => paymentRepository.createOperation(token, userId, "USO", creditAmount), {
    onSuccess: async (data) => {
      // console.log(data);
      queryClient.invalidateQueries("getUser");
    },
    onError: (error) => {

      Alert.alert(error.response.data.error)
      console.log(error.response.data.error)
    }

  });

  const confirmModal = async () => {
    setCarregarOption(false);
    const paramAxios = plugName.substring(0, 1) + plugName.substring(7, 8);
    console.log(paramAxios);
    const resp = axios({
      url: `http://192.168.4.1/${paramAxios}`,
      method: "GET",
      timeout: 10000,
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      }
    }).then((response) => {
      console.log("Deu certo", response.data);
      mutationPlug.mutate();
    }).catch((error) => {
      console.log("Error", error.response.data);
    })
    // mutationPlug.mutate();
    onRefresh();
  }

  const selectPlug = async (value) => {
    if (value == "Celular")
      setPlugName("Tomada 1");
    if (value == "Patinete/Bike T2")
      setPlugName("Tomada 2");
    if (value == "Patinete/Bike T3")
      setPlugName("Tomada 3");
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setLoading(true);
    setPlugInUse([]);
    setUserPlugs([]);

    const Token = getToken();

    var decoded = jwt_decode(Token);
    await getPlugs(Token);
    console.log("getPlugs:: ", plugInUse)
    checkPlugsTime();

    setTimeout(() => {
      getUserPlug(Token, decoded.userId);
    }, 1500);
    setTimeout(() => {
      checkUserPlugsTime();
    }, 500);
    setRefreshing(false);
    setLoading(false);
  }, []);


  return (
    <View style={styles.container}>
      <NavbarComponent />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        <Pressable>
          <Balance tomadas={userPlugs} deactivatePlug={deactivatePlug} loading={loading || refreshing} />
        </Pressable>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate('compra')}
        >
          <Text style={styles.textButton}>
            Comprar Créditos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => setCarregarOption(true)}
        >
          <Text style={styles.textButton}>
            Carregamento
          </Text>
        </TouchableOpacity>

        <Modal
          animationType={'slide'}
          transparent={true}
          visible={carregarOption}
          onRequestClose={() => {
            setCarregarOption(!carregarOption);
          }}
        >
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.modalView}>
              <View style={styles.centeredView}>
                <Text style={styles.paragraph}>
                  {" "}
                  Selecione a tomada que deseja usar:{" "}
                </Text>
                <RadioButton onSelect={(value) => selectPlug(value)} inUse={plugInUse} />
                <TextInput
                  style={styles.input}
                  placeholder="Quantidade de créditos:"
                  value={creditAmount}
                  onChangeText={setCreditAmount}
                  keyboardType="numeric"
                  inputMode='numeric'
                />

                <View style={styles.buttons}>
                  <TouchableOpacity
                    style={styles.buttonClose}
                    onPress={() => { setCarregarOption(false); setPlugName(""); setCreditAmount(0); }}>
                    <Text style={styles.textStyle}>Fechar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.buttonClose}
                    onPress={() => confirmModal()}
                  // disabled={disabled}
                  >
                    <Text style={styles.textStyle}>Confirmar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </View>
  );
};

export default HomePage;