import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';

const CreditCardPayment = () => {
  const [creditCard, setCreditCard] = React.useState({});

  handleChange = (name, value) => {
    setCreditCard({ ...creditCard, [name]: value });
  }

  handleConfirm = () => {
    console.log('creditCard:: ', creditCard)
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Número do cartão'
        style={styles.inputBig}
        value={creditCard.number}
        onChangeText={value => handleChange('number', value)}
        keyboardType='numeric'
      />
      <View style={styles.flex}>
        <TextInput
          placeholder='CVV'
          style={styles.input}
          value={creditCard.cvv}
          onChangeText={value => handleChange('cvv', value)}
          keyboardType='numeric'
        />
        <TextInput
          placeholder='Validade'
          style={styles.input}
          value={creditCard.validity}
          onChangeText={value => handleChange('validity', value)}
        />
      </View>
      <TextInput
        placeholder='Nome do titular'
        style={styles.inputBig}
        value={creditCard.name}
        onChangeText={value => handleChange('name', value)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleConfirm}
      >
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
      <BottomTabs icons={bottomTabIcons} />
    </View>
  )
};

export default CreditCardPayment;