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

const HomePage = () => {
  const navigation = useNavigation();

  const [carregarOption, setCarregarOption] = useState(false);
  const [option, setOption] = useState(null);
  const [quantidade, setQuantidade] = useState('');

  const data = [
    { value: "Tomada 1" },
    { value: "Tomada 2" },
    { value: "Tomada 3" }
  ];

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
        onPress={() => setCarregarOption(true)}
      >
        <Text style={styles.textButton}>
          Carregar Patins/Bicicleta
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