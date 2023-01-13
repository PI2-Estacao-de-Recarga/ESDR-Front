import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
import Balance from '../../components/balance';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Balance />
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate('compra')}
      >
        <Text style={styles.textButton}>
          Comprar Créditos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate('home')}
      >
        <Text style={styles.textButton}>
          Carregar Celular
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button3}
        onPress={() => navigation.navigate('home')}
      >
        <Text style={styles.textButton}>
          Carregar Patins/Bicicleta
        </Text>
      </TouchableOpacity>
      <BottomTabs icons={bottomTabIcons} />
    </View>
  );
};

export default HomePage;