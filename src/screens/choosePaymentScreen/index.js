import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Card, Header, Input } from 'react-native-elements';
import styles from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';
import { paymentRepository } from '../../domain/repositories/paymentRepository';
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { getToken } from '../../utils/getToken';
import jwt_decode from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';
// import { useLocation } from "react-router-dom";

const ChoosePaymentScreen = ({route}) => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const navigation = useNavigation();
  // const location = useLocation();
  // const { value } = location.state 
  const value = route.params.value;

  useEffect(() => {
    const Token = getToken();
    setToken(Token);
    var decoded = jwt_decode(Token);
    setUserId(decoded.userId);
  }, [])


  const mutation = useMutation(() => paymentRepository.createPayment(token, userId, value), {
    onSuccess: async (data) => {
      navigation.navigate('pixPaymentScreen', { data: data });
    },
    onError: (error) => console.log(error)
  });

  const handleSubmit = async () => {
    mutation.mutate();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.fontTitle}>
        Selecione o método de pagamento:
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('creditCardPaymentScreen')}
      >
        <Text style={styles.textButton}>
          PicPay
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSubmit()}
      >
        <Text style={styles.textButton}>
          Pix
        </Text>
      </TouchableOpacity>

      <BottomTabs icons={bottomTabIcons} />
    </View>
  );
};

export default ChoosePaymentScreen;
