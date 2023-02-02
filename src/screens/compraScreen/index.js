import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { Card, Header, Input } from 'react-native-elements';
import styles from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import NavbarComponent from '../../components/navbarComponent';
import { useQuery } from "react-query";
import { getToken } from '../../utils/getToken';
import jwt_decode from 'jwt-decode';

const CompraPage = () => {
  const [creditos, setCreditos] = useState(0);
  const [valorFinal, setValorFinal] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation();
  const [amount, setAmount] = useState({
    balance: '0'
  });
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
      const Token = getToken();
      setToken(Token);
      var decoded = jwt_decode(Token);
      setUserId(decoded.userId);
  }, [])

  const query = useQuery(['getUser', token, userId], () => authRepository.getUser(token, userId), {
      initialData: amount,
      enabled: !!token,
  });

  useEffect(() => {
      setAmount({
          ...amount,
          balance: query.data.balance,
      });
  }, [query.data])

  useEffect(() => {
    if(creditos != 0)
      setDisabled(false)
    else if (creditos == 0)
      setDisabled(true)
  }, [creditos])

  function calcCredits(valor) {
    return valor / 0.05;
  }

  function calcCurrentBalance(balance, valorFinal){
    return balance + valorFinal; 
  }

  const handleSubmit = async () => {
    navigation.navigate('choosePaymentScreen',  { value: creditos });
  }

  return (
    <View style={styles.container}>
      <NavbarComponent/>
      <View style={styles.item}>
        <Text style={styles.itemTitle1}>Compra de créditos</Text>
        <TextInput
          style={styles.input}
          placeholder='Valor em reais'
          value={creditos}
          onChangeText={creditos => setCreditos(creditos.replace(/[^0-9]/g, ''))}
          keyboardType='numeric'
          maxLength={7}
        />
        <View style={styles.viewMoneyIcon}>
          <Image
            style={styles.moneyicon}
            source={require('../../../assets/money.png')}
          />
          <Text style={styles.textMoney}>
            {'+' + calcCredits(creditos)}
          </Text>
        </View>
        <Text style={styles.itemTitle2}>
          Saldo atualizado: {calcCurrentBalance(amount.balance, calcCredits(creditos))}
        </Text>
      </View>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.5}
        style={styles.button1}
        onPress={() => handleSubmit()}
      >
        <Text style={styles.textButton}>
          Confirmar
        </Text>
      </TouchableOpacity>
      <BottomTabs icons={bottomTabIcons} />
    </View>
  );
};

export default CompraPage;