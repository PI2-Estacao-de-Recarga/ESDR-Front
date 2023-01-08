import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

const CreditCardPaymentScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.fontTitle}>
        Pedido de créditos realizado!
      </Text>
      <View style={styles.divider} />
      <Text style={styles.fontBody2}>
        Parar finalizar a compra, escaneie<br></br>
        o QR Code abaixo ou copie o código
      </Text>
      <Text style={styles.fontSubtitle}>
        Código - QRCode
      </Text>
      <View style={styles.viewQRCode}>
        <Image
          style={styles.qrcode}
          source={require('../../assets/icon.png')}
        />
      </View>
      <View style={styles.divider} />
      <Text style={styles.fontSubtitle}>
        Código - copia e cola
      </Text>
      <Text style={styles.fontBody}>
        123456789
      </Text>
    </View>
  )
};

export default CreditCardPaymentScreen;