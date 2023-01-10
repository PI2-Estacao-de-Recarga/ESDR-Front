import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Card, Header, Input } from 'react-native-elements';
import styles from './styles';
import Balance from '../../components/balance';

const HomePage = ({ navigation }) => {

    return (
        <View>
          <Balance/>
          
         <TouchableOpacity
           style={styles.button1}
           onPress={() => navigation.navigate('compraPage')}
         >
         <Text style={styles.textButton}>
             Comprar Créditos
         </Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button2}
           onPress={() => navigation.navigate('homePage')}
         >
         <Text style={styles.textButton}>
             Carregar Celular
         </Text>
         </TouchableOpacity>

         <TouchableOpacity
           style={styles.button3}
           onPress={() => navigation.navigate('homePage')}
         >
         <Text style={styles.textButton}>
             Carregar Patins/Bicicleta
         </Text>
         </TouchableOpacity>
        </View>
    );
};

export default HomePage;