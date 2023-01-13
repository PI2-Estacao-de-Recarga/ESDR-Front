import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Card, Header, Input } from 'react-native-elements';
import styles from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        onPress={() => navigation.navigate('homePage')}
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
    <BottomTabs icons={bottomTabIcons} />
    </View>
  );
};

export default Login;
