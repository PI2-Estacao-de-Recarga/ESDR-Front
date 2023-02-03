import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { signUpThunk } from '../../store/signUp/signUpSlice';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { setError, setSuccess } from '../../store/signUp/signUpSlice';

const Register = ({ }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const signUpState = useSelector((state) => state.root.signUp);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const signUpConfirm = () => {
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

  const isAnyFieldEmpty = () => {
    return name === '' || cpf === '' || email === '' || password === '' || passwordConfirmation === '';
  }

  const closeErrorModal = () => {
    dispatch(setError({ error: false, errorMessage: '' }));
  }

  const closeSuccessModal = () => {
    setShowSuccess(false);
    dispatch(setSuccess({success: false}));
    navigation.navigate('login');
  };

  useEffect(() => {
    if (signUpState.success) {
      setShowSuccess(true);
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
        disabled={isAnyFieldEmpty()}
      >
        <Text style={styles.buttonText}>
          Criar Conta
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={signUpState.error}
        transparent={true}
        onRequestClose={() => closeErrorModal()}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.errorText}>{signUpState.errorMessage}</Text>
            <TouchableOpacity
              onPress={() => closeErrorModal()}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Rescrever Dados</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {closeErrorModal(); navigation.navigate('login')}}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Ir para Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        visible={showSuccess}
        transparent={true}
        onRequestClose={() => setShowSuccess(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.text}>Conta criada com sucesso</Text>
            <TouchableOpacity
              onPress={() => closeSuccessModal()}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Fazer Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View >
  );
};

export default Register;