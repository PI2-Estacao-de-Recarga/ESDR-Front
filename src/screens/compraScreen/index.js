import React , { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { Card, Header, Input } from 'react-native-elements';
import styles from './styles';

const CompraPage = ({ navigation }) => {
    const [creditos, setCreditos] = useState('');

    return (
        <View>
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
                </View>
                <Text style={styles.itemTitle2}>    saldo 
                {'\n'}
                atualizado: 
                </Text>
         </View>
         <TouchableOpacity
           style={styles.button1}
           onPress={() => navigation.navigate('homePage')}
         >
         <Text style={styles.textButton}>
             Confirmar
         </Text>
         </TouchableOpacity>
        </View>
    );
};

export default CompraPage;