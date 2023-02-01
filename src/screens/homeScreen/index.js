import React, { useState } from "react";
import {
  Alert,
  Text,
  Modal,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import Balance from '../../components/balance';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';
import { useNavigation } from '@react-navigation/native';
import RadioButton from "../../components/radioButton";
import NavbarComponent from '../../components/navbarComponent';

const HomePage = () => {
  const navigation = useNavigation();

  const [carregarOption, setCarregarOption] = useState(false);
  const [option, setOption] = useState(null);
  const [quantidade, setQuantidade] = useState('');

  const data = [
    { value: "Celular" },
    { value: "Patinete/Bike T2" },
    { value: "Patinete/Bike T3" }
  ];

  return (
    <View style={styles.container}>
      <NavbarComponent />
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
        onPress={() => setCarregarOption(true)}
      >
        <Text style={styles.textButton}>
          Carregamento
        </Text>
      </TouchableOpacity>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={carregarOption}
        onRequestClose={() => {
          setCarregarOption(!carregarOption);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.centeredView}>
            <Text style={styles.paragraph}>
              {" "}
              Selecione a tomada que deseja usar:{" "}
            </Text>
            <RadioButton data={data} onSelect={(value) => setOption(value)} />
            <TextInput
              style={styles.input}
              placeholder="Quantidade de créditos:"
              value={quantidade}
              onChangeText={setQuantidade}
              secureTextEntry
            />

            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={() => setCarregarOption(false)}>
                <Text style={styles.textStyle}>Fechar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={() => setCarregarOption(false)}>
                <Text style={styles.textStyle}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <BottomTabs icons={bottomTabIcons} />
    </View>
  );
};

export default HomePage;