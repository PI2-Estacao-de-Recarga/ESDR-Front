import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Card, Header, Input } from 'react-native-elements';
import styles from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';
import { paymentRepository } from '../../domain/repositories/paymentRepository';
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { getToken } from '../../utils/getToken';
import jwt_decode from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';
import NavbarComponent from '../../components/navbarComponent';
// import { useLocation } from "react-router-dom";

const ChoosePaymentScreen = ({ route }) => {
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const navigation = useNavigation();
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


  return (
    <View style={styles.container}>
      <NavbarComponent />
      {mutation.isLoading || mutation.isFetching ?
        <ActivityIndicator size={80} color="#000000" />
        :
        <>
          <Text style={styles.fontTitle}>
            Selecione o método de pagamento:
          </Text>
          <TouchableOpacity
            style={styles.button}
            disabled={true}
          >
            <Text style={styles.textButton}>
              PicPay (Desativado)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => mutation.mutate()}
          >
            <Text style={styles.textButton}>
              Pix
            </Text>
          </TouchableOpacity>
        </>}
      <BottomTabs icons={bottomTabIcons} />
    </View>
  );
};

export default ChoosePaymentScreen;
