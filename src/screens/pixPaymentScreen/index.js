import React from 'react';
import { View, Text, TextInput, Clipboard, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import { styles } from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';
import { getToken } from '../../utils/getToken';
import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { paymentRepository } from '../../domain/repositories/paymentRepository';
import { useEffect } from 'react';
import NavbarComponent from '../../components/navbarComponent';
// import Clipboard from "@react-native-community/clipboard";

const PixPayment = ({ route }) => {
  const data = route.params.data;
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');
  const navigation = useNavigation();
  
  useEffect(() => {
    const Token = getToken();
    setToken(Token);
    var decoded = jwt_decode(Token);
    setUserId(decoded.userId);
  }, [])

  const copyToClipboard = () => {
    Clipboard.setString(data.qrCodeText);
    alert("Texto Copiado!");
  }

  const mutation = useMutation(() => paymentRepository.createOperation(token, userId, "COMPRA", data.id), {
    onSuccess: async (data) => {
      console.log(data);
      navigation.navigate("home");
    },
    onError: (error) => console.log(error)
  });

  return (
    <View style={styles.container}>
      <NavbarComponent />
      <Text style={styles.fontTitle}>
        Pedido de créditos realizado!
      </Text>
      <View style={styles.divider} />
      <Text style={styles.fontBody2}>
        Parar finalizar a compra, escaneie {"\n"}
        o QR Code abaixo ou copie o código
      </Text>
      <Text style={styles.fontSubtitle}>
        Código - QRCode
      </Text>
      <View style={styles.viewQRCode}>
        <QRCode
          value={data.qrCodeText}
          size={200}
          color="black"
          backgroundColor="white"
          logoSize={30}
          logoMargin={2}
          logoBorderRadius={15}
          logoBackgroundColor="yellow"
        />
      </View>
      <View style={styles.divider} />
      <Text style={styles.fontSubtitle}>
        Código - copia e cola
      </Text>
      <TextInput
        value={data.qrCodeText}
        style={styles.input}
        readOnly={true}
        showSoftInputOnFocus={false}
      />
      {/* Achar o icone certo */}
      <Icon name='home' size={20} color="#000" onPress={() => copyToClipboard()} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => mutation.mutate()}
      >
        <Text style={styles.textButton}>
          Pagar
        </Text>
      </TouchableOpacity>
      <BottomTabs icons={bottomTabIcons} />
    </View>
  )
};

export default PixPayment;