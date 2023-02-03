import React, { useState } from "react";
import {
  Alert,
  Text,
  Modal,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  TouchableWithoutFeedback, Keyboard, ScrollView, RefreshControl
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
  // const token = route.params.token;
  // const userId = route.params.userId;
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [creditAmount, setCreditAmount] = useState(0);
  const [plugName, setPlugName] = useState("")
  const [disabled, setDisabled] = useState(true);
  const [plugInUse, setPlugInUse] = useState([{
    name: "",
    dateTimeToDeactivate: ""
  }])
  const [userPlugs, setUserPlugs] = useState([{
    name: "",
    dateTimeToDeactivate: "",
  }]);
  const [lista, setLista] = useState([]);
  const [data, setData] = useState([
    { value: "Celular", disable: false },
    { value: "Patinete/Bike T2", disable: false },
    { value: "Patinete/Bike T3", disable: false }
  ]);
  const [loading, setLoading] = useState(true);

  const getUserPlug = async (Token, UserId) => {
    return plugRepository.getPlug(Token, UserId)
      .then((res) => {
        console.log("getUserPlug:: ", res.data);
        setUserPlugs(getUserTomada(res.data));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const getPlugs = async (Token) => {
    return plugRepository.getPlug(Token)
      .then((res) => {
        console.log("getPlugs:: ", res.data);
        setPlugInUse(getTomadas(res.data));
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const deactivatePlug = async (plugName) => {
    console.log("Deactivate plugName:: ", plugName);
    setPlugName(plugName);
    // const resp = axios({
    //     url: `http://192.168.4.1/${plugName}`,
    //     method: "GET",
    //     timeout: 10000,
    //     headers: {
    //       Accept: 'application/json',
    //       'content-type': 'application/json',
    //     }
    //   }).then((response) => {
    //     console.log("Deu certo", response.data);
    //     mutationPlug.mutate();
    //   }).catch((error) => {
    //     console.log("Error", error.response.data);
    //   })
    mutationPlug.mutate();
  }

  const checkPlugsTimes = () => {
    plugInUse.map((item) => {
      // if (item != "" && (new Date(item) - Date.now('UTC-3')) <= 0) {
      //   setPlugName(item.name);
      //   deactivatePlug(item.name.slice(0, 1) + item.name.slice(7, 8));
      // }
    })
  }

  useEffect(() => {
    navigation.pop(0);
    const Token = getToken();
    setToken(Token);
    console.log('token:: ', token);
    var decoded = jwt_decode(Token);
    setUserId(decoded.userId);

    setTimeout(() => {
      getUserPlug(Token, decoded.userId);
      getPlugs(Token);
    }, 2000);

    checkPlugsTimes();
  }, [])

  useEffect(() => {
    if (creditAmount != 0 && plugName != "")
      setDisabled(false)
    else
      setDisabled(true)
  }, [creditAmount])

  // const query = useQuery('getUserPlug', () => plugRepository.getPlug(token, userId), {
  //   initialData: plugInUse,
  //   enabled: !!token,
  // });

  // useEffect(() => {
  //   var x = [];
  //   x = getUserTomada(query.data);
  // }, [query.isFetched])

  // const queryuserPlugs = useQuery('getuserPlugs', () => plugRepository.getPlug(token), {
  //   initialData: userPlugs,
  //   enabled: !!token,
  //   retry: 3,
  // });

  // useEffect(() => {
  //   const x = getTomadas(queryuserPlugs.data);
  // }, [queryuserPlugs.data])

  function getTomadas(listOfuserPlugs) {
    var auxList = []
    listOfuserPlugs.forEach(item => {
      auxList.push({
        name: item.name,
        useFinish: item.dateTimeToDeactivate,
      })
    });

    console.log("getTomadas:: ", auxList)
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

    console.log("getUserTomadas:: ", auxList)
    return auxList;
  }

  const mutationPlug = useMutation(() => plugRepository.setPlug(token, userId, creditAmount, plugName), {
    onSuccess: async (data) => {
      console.log("data", data);
      mutationOperation.mutate();
    },
    onError: (error) => {
      Alert.alert(error.response.data.error)
      console.log(error.response.data.error)
    }
  });

  const mutationOperation = useMutation(() => paymentRepository.createOperation(token, userId, "USO", creditAmount), {
    onSuccess: async (data) => {
      console.log(data);
      queryClient.invalidateQueries("getUser");
    },
    onError: (error) => {

      Alert.alert(error.response.data.error)
      console.log(error.response.data.error)
    }

  });

  const confirmModal = async () => {
    setCarregarOption(false);
    // const paramAxios = plugName.substring(0, 1) + plugName.substring(7, 8);
    // console.log(paramAxios);
    // const resp = axios({
    //   url: `http://192.168.4.1/${paramAxios}`,
    //   method: "GET",
    //   timeout: 10000,
    //   headers: {
    //     Accept: 'application/json',
    //     'content-type': 'application/json',
    //   }
    // }).then((response) => {
    //   console.log("Deu certo", response.data);
    //   mutationPlug.mutate();
    // }).catch((error) => {
    //   console.log("Error", error.response.data);
    // })
    mutationPlug.mutate();
  }

  const selectPlug = async (value) => {
    if (value == "Celular")
      setPlugName("Tomada 1");
    if (value == "Patinete/Bike T2")
      setPlugName("Tomada 2");
    if (value == "Patinete/Bike T3")
      setPlugName("Tomada 3");
  }

  if (!loading) {
    console.log("plugInUse: ", plugInUse);
    console.log("\nuserPlugs: ", userPlugs);
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <NavbarComponent />
        <ActivityIndicator size={80} color="#000000" />
        <BottomTabs icons={bottomTabIcons} />
      </View>
    )
  } else {
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
            <Balance tomadas={userPlugs} deactivatePlug={deactivatePlug}/>
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
                  <RadioButton data={data} onSelect={(value) => selectPlug(value)} inUse={plugInUse}/>
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
  }
};

export default HomePage;