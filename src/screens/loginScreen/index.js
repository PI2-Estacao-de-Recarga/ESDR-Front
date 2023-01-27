import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setSignIn } from '../../domain/auth/authSlice';
import styles from './styles';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setSignIn({email,password}));
  }

  useEffect(() => {
    if (authState.isAuthenticated) {
      navigation.navigate('home');
    }

    if (authState.error) {
      console.log(authState.error);
      setError(authState.error);
    }
  }, [authState])


  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.fontTitle}>
          ESDR
        </Text>
        <Text style={styles.fontLogin}>
          Login
        </Text>
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
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.button}
          onPress={(e) => handleSubmit(e)}
        >
          <Text style={styles.textButton}>
            Entrar
          </Text>
        </TouchableOpacity>
        <Text
          style={styles.fontCreateAccount}
          onPress={() => navigation.navigate('register')}
        >
          Criar conta
        </Text>
        <Text
          style={styles.fontForgotPassword}
          onPress={() => navigation.navigate('register')}
        >
          Esqueci a senha
        </Text>
      </View>
    </View>
  );
};

export default Login;
