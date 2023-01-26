import React, { useState } from "react";
import {
  Alert,
  Text,
  Modal,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";
import RadioButton from "../radioButton";
import styles from "./styles";


export default function ModalCarregar() {
  const [modalVisible, setModalVisible] = useState(false);
  const [option, setOption] = useState(null);
  const [quantidade, setQuantidade] = useState('');

  const data = [
    { value: "Tomada 1" },
    { value: "Tomada 2" },
    { value: "Tomada 3" }
  ];

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
      <View style={styles.modalView}>
        <View style={styles.centeredView}>
              <Text style={styles.paragraph}>
                {" "}
                {/* TODO - verificar tomadas em uso */}
                Selecione a tomada que deseja usar:{" "}
              </Text>
              <RadioButton data={data} onSelect={(value) => setOption(value)} />
              <Text> Your option: {option}</Text>

              <TextInput
                style={styles.input}
                placeholder="Quantidade"
                value={quantidade}
                onChangeText={setQuantidade}
                secureTextEntry
              />
        </View>
        <TouchableOpacity
            style={styles.buttonClose}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Hide Modal</Text>
        </TouchableOpacity>
      </View>
      </Modal>
    </View>
  );
};

