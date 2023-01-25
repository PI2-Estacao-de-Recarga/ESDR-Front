import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Card, Header, Input } from 'react-native-elements';
import styles from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';

const ChoosePaymentScreen = ({ navigation }) => {

    handleChoice = (choice) => {
        navigation.navigate(choice)
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
        onPress={() => navigation.navigate('pixPaymentScreen')}
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
