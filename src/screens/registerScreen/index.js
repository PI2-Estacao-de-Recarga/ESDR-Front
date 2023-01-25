import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Card, Input } from 'react-native-elements';
import { signUp } from '../../domain/signUp/signUpSlice';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRepository } from '../../domain/signUp/signUpRepository';

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const signUpState = useSelector(state => state.signUp);  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState('');

  const signUpConfirm = () => {
    // console.log('signUpConfirm', name, email, password, passwordConfirmation)
    
    // dispatch(signUp({ name, cpf, email, password, passwordConfirmation }));
    signUpRepository.signUp({ name, cpf, email, password })
      .then(response => {
        console.log('response', response)
        navigation.navigate('Login');
      })
      .catch(error => {
        console.log('error', error)
        setError(error);
      })
    
    // if (signUpState.success) {
    //   navigation.navigate('Login');
    // }

    // if (signUpState.error) {
    //   console.log(signUpState.error);
    //   setError(signUpState.error);
    // }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Register
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
      <Button
        color='#000'
        title='Register'
        onPress={() => signUpConfirm()}
      />
      {/* <Alert
        title='Error'
        message={error}
      /> */}
    </View>
  );
};

export default Register;