import React, { useState } from "react";
import {
  Alert,
  Text,
  Modal,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import Balance from '../../components/balance';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';
import { useNavigation } from '@react-navigation/native';
import RadioButton from "../../components/radioButton";
import NavbarComponent from '../../components/navbarComponent';
import { useEffect } from "react";
import { useMutation } from "react-query";
import { getToken } from "../../utils/getToken";
import jwt_decode from 'jwt-decode';
import { paymentRepository } from "../../domain/repositories/paymentRepository";
import { plugRepository } from "../../domain/repositories/plugRepository";

const HomePage = () => {
  const navigation = useNavigation();
  const [carregarOption, setCarregarOption] = useState(false);
  const [option, setOption] = useState(null);
  const [creditAmount, setCreditAmount] = useState('');
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const [plugName, setPlugName] = useState("")
  const data = [
    { value: "Celular" },
    { value: "Patinete/Bike T2" },
    { value: "Patinete/Bike T3" }
  ];

  useEffect(() => {
    const Token = getToken();
    setToken(Token);
    var decoded = jwt_decode(Token);
    setUserId(decoded.userId);
  }, [])

  const mutationPlug = useMutation(() => plugRepository.setPlug(token, userId, creditAmount, plugName), {
    onSuccess: async (data) => {
      console.log("data", data);
      mutationOperation.mutate();
    },
    onError: (error) => {
      console.log(error.response.data.error)
    } 
  });

  const mutationOperation = useMutation(() => paymentRepository.createOperation(token, userId, "USO", null, creditAmount), {
    onSuccess: async (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error.response.data.error)
      mutationPlug.mutate();
    } 
    
  });

  const confirmModal = async () => {
    setCarregarOption(false);
    const paramAxios = plugName.substring(0, 1) + plugName.substring(7, 8);
      console.log(paramAxios);
      const resp = axios({
        url: `http://192.168.4.1/${paramAxios}`,
        method: "GET",
        timeout: 5000,
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
        }
      }).then((response) => {
        console.log("Deu certo", response.data);
        mutationPlug.mutate();
      }).catch((error) => {
        console.error(error)
      })
  }

  const selectPlug = async (value) => {
    if (value == "Celular")
      setPlugName("Tomada 1");
    if (value == "Patinete/Bike T2")
      setPlugName("Tomada 2");
    if (value == "Patinete/Bike T3")
      setPlugName("Tomada 3");
  }

  return (
    <View style={styles.container}>
      <NavbarComponent />
      <Balance />
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
        <View style={styles.modalView}>
          <View style={styles.centeredView}>
            <Text style={styles.paragraph}>
              {" "}
              Selecione a tomada que deseja usar:{" "}
            </Text>
            <RadioButton data={data} onSelect={(value) => selectPlug(value)} />
            <TextInput
              style={styles.input}
              placeholder="Quantidade de créditos:"
              value={creditAmount}
              onChangeText={setCreditAmount}
            />

            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={() => setCarregarOption(false)}>
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={() => confirmModal()}>
                <Text style={styles.textStyle}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <BottomTabs icons={bottomTabIcons} />
    </View>
  );
};

export default HomePage;