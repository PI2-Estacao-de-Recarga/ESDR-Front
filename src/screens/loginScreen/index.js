import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/auth/authSlice';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const auth  = useSelector((state) => state.auth);

  const handleSubmit = async () => {
    dispatch(login({email, password}));
  }

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigation.navigate('home');
    }

    if (auth.error) {
      console.log(auth.error);
      setError(auth.error);
    }
  }, [auth])

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
          onPress={(e) => handleSubmit()}
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
