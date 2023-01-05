import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Card, Header, Input } from 'react-native-elements';
import FooterComponent from '../../components/footer';
import HeaderComponent from '../../components/header';
import styles from './styles';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Login
      </Text>
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
      <Button
        color='#000'
        title='Login'
        onPress={() => navigation.navigate('homePage')}
      />
      <Text
        style={{ marginTop: 10, color: 'black' }}
        onPress={() => navigation.navigate('register')}
      >
        Criar conta
      </Text>
      <Text
        style={{ marginTop: 50, color: 'black' }}
        onPress={() => navigation.navigate('register')}
      >
        Esqueci a senha
      </Text>
    </View>
  );
};

export default Login;
