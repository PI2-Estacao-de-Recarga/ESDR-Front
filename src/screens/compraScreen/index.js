import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { Card, Header, Input } from 'react-native-elements';
import styles from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';

const CompraPage = ({ navigation }) => {
  const [creditos, setCreditos] = useState(0);

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
        style={styles.button1}
        onPress={() => navigation.navigate('choosePaymentScreen')}
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