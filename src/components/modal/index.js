import React, { useState } from "react";
import {
  Alert,
  Text,
  Pressable,
  View,
  TextInput
} from "react-native";
import RadioButton from "../radioButton";
import styles from "./styles";


export default function Modal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [option, setOption] = useState(null);
  const [quantidade, setQuantidade] = useState('');

  const data = [
    { value: "Tomada 1" },
    { value: "Tomada 2" },
    { value: "Tomada 3" }
  ];
  setModalVisible(true)

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
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <View style={styles.container}>
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
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

