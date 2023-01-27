import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { Card, Input } from 'react-native-elements';
import { signUp } from '../../domain/signUp/signUpSlice';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRepository } from '../../domain/signUp/signUpRepository';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';


const Register = ({  }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const signUpState = useSelector((state) => state.signUp);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState('');

  const signUpConfirm = () => {
    console.log('signUpConfirm', name, email, password, passwordConfirmation)

    dispatch(
      signUp({
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
      navigation.navigate('Login');
    }

    if (signUpState.error) {
      console.log(signUpState.error);
      setError(signUpState.error);
    }
  }, [signUpState])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Criar Conta
      </Text>
      <Input
        placeholder='Name'
        value={name}
        onChangeText={setName}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Input
        placeholder='CPF'
        value={cpf}
        onChangeText={setCpf}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType="numbers-and-punctuation"
      />
      <Input
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
      />
      <Input
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Input
        placeholder='Confirm Password'
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={signUpConfirm}
      >
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
      {/* <Alert
        title='Error'
        message={error}
      /> */}
    </View>
  );
};

export default Register;