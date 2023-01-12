import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Card, Header, Input } from 'react-native-elements';
import styles from './styles';

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
          Cartão de crédito
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

      
    </View>
  );
};

export default ChoosePaymentScreen;
