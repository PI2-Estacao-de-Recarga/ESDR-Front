import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
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
  const [error, setError] = useState('');

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
      navigation.navigate('login');
    }

    if (signUpState.error) {
      console.log(signUpState.error);
      setError(signUpState.error);
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
        <Text style={styles.textButton}>
          Criar Conta
        </Text>
      </TouchableOpacity>
    </View >
  );
};

export default Register;