import React from 'react';
import { View, Text, TextInput, Clipboard,} from 'react-native';
import { Icon } from 'react-native-elements'
import { styles } from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';
import QRCode from 'react-native-qrcode-svg';
// import Clipboard from "@react-native-community/clipboard";

const PixPayment = ({ route }) => {
  const data = route.params.data;
  console.log("data", data);

  const copyToClipboard = () => {
    Clipboard.setString(data.qrCodeText);
    alert("Texto Copiado!");
  }

  return (
    <View style={styles.container}>
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
      <View style={styles.copySection}>
        <TextInput
          value={data.qrCodeText}
          style={styles.input}
          readOnly={true}
          showSoftInputOnFocus={false}
        />
        {/* Achar o icone certo */}
        <Icon name='home' size={20} color="#000" onPress={() => copyToClipboard()}/>
      </View>

      <BottomTabs icons={bottomTabIcons} />
    </View>
  )
};

export default PixPayment;