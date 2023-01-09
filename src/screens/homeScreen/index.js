import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styles';
import Balance from '../../components/balance';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';

const HomePage = ({ navigation }) => {

    return (
        <View style={styles.container}>
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
          <BottomTabs icons={bottomTabIcons} />
        </View>
    );
};

export default HomePage;