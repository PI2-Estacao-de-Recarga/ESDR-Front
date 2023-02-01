import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { Card, Header, Input } from 'react-native-elements';
import styles from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


const CompraPage = () => {
  const [creditos, setCreditos] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    if(creditos != 0)
      setDisabled(false)
    else if (creditos == 0)
      setDisabled(true)
  }, [creditos])
 
  const handleSubmit = async () => {
    navigation.navigate('choosePaymentScreen',  { value: creditos });
  }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.itemTitle1}>Compra de créditos</Text>
        <TextInput
          style={styles.input}
          placeholder='Quantidade de créditos'
          value={creditos}
          onChangeText={setCreditos}
          keyboardType='numeric'
        />
        <View style={styles.viewMoneyIcon}>
          <Image
            style={styles.moneyicon}
            source={require('../../../assets/money.png')}
          />
          <Text style={styles.textMoney}>
            {'+' + creditos}
          </Text>
        </View>
        <Text style={styles.itemTitle2}>
          saldo
          {'\n'}
          atualizado:
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