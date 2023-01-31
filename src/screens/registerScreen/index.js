import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { signUpThunk } from '../../store/signUp/signUpSlice';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';


const Register = ({ }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const signUpState = useSelector((state) => state.signUp);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showError, setShowError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const signUpConfirm = () => {
    console.log('signUpConfirm', name, email, password, passwordConfirmation)

    dispatch(
      signUpThunk({
        name: name,
        cpf: cpf,
        email: email,
        password: password,
        confirmPassword: passwordConfirmation
      })
    );
  }

  useEffect(() => {
    if (signUpState.success) {
      setShowSuccess(true);
    }

    if (signUpState.error) {
      setShowError(true);
    }
  }, [signUpState])

  return (
    <View style={styles.container}>
      <Text style={styles.fontTitle}>
        ESDR
      </Text>
      <Text style={styles.fontRegister}>
        Criar Conta
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Nome'
        value={name}
        onChangeText={setName}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder='CPF'
        value={cpf}
        onChangeText={setCpf}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType="numbers-and-punctuation"
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
      />
      <TextInput
        style={styles.input}
        placeholder='Senha'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder='Confirme a senha'
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => signUpConfirm()}
      >
        <Text style={styles.buttonText}>
          Criar Conta
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={showError}
        transparent={true}
        style={styles.modal}
        onRequestClose={() => setShowError(false)}
      >
        <View style={styles.modalContent}>
          <Text>{signUpState.errorMessage}</Text>
          <TouchableOpacity
            onPress={() => setShowError(false)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Rescrever Dados</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('login')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Ir para Login</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        visible={showSuccess}
        transparent={true}
        style={styles.modal}
        onRequestClose={() => setShowSuccess(false)}
      >
        <View style={styles.modalContent}>
          <Text style={styles.text}>Conta criada com sucesso</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('login')}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Fazer Login</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View >
  );
};

export default Register;