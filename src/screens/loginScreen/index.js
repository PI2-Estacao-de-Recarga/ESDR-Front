import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { signIn } from '../../domain/auth/authSlice';
import styles from './styles';
import axios from 'axios';
import loginService from '../../services/loginService';


const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {

    let data = {
      email: email,
      password: password
    }
    
    loginService.login(data).then((response) => {
      console.log("ihuuuu", response);
    }).catch((error) => {
      console.log("ihuu tbm", error);
    })
    
    // const api = axios.create({
    //   baseURL: 'http://localhost:4001/user-control',
    //   headers: {
    //     Accept: 'application/json',
    //     'content-type': 'application/json',
    //   }
    // })

    // const {data} = api.post(
    //   '/login',
    //   {
    //     email: email,
    //     password: password,
    //   }
    // )

    console.log("data:", data);

    // axios.post('http://localhost:4001/user-control/login', {
    //   email: username,
    //   password: password,
    // })
    // .then(function (response) {
    //   console.log(response);
    //   console.log(JSON.stringify(response));
    // })
    // .catch(function (error) {
    //   console.error(error);
    //   console.log(JSON.stringify(error));
    // });
    // e.preventDefault();
    // dispatch(signIn(email, password));
  }


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
