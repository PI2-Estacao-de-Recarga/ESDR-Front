import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { setModalSessionClose } from '../../store/modalSession/modalSessionSlice';

export function ModalSessionOut(props) {
  const dispatch = useDispatch();
  const { modalSessionOpen } = useSelector((state) => state.modalSession);

  const handleSessionOut = () => {
    dispatch(setModalSessionClose());
  }

  return (
    <Modal
      animationType="slide"
      visible={modalSessionOpen}
      transparent={true}
      onRequestClose={() => setShowError(false)}
    >
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <Text>Sessão expirada</Text>
          <TouchableOpacity
            onPress={() => handleSessionOut()}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Fazer Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}