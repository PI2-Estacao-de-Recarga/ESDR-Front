import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { Card, Header, Input } from 'react-native-elements';
import FooterComponent from '../../components/footer';
import HeaderComponent from '../../components/header';
import styles from './styles';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold' ,fontSize: 50, marginBottom: 100}}>
        ESDR
      </Text>
      <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 25, marginRight: 200 }}>
        Login
      </Text>
      <TextInput
        style={{ width: 270,
          margin: 12,
          borderBottomWidth: 1,
          padding: 0}}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
        keyboardType='email-address'
      />
      <TextInput
        style={{ width: 270,
          margin: 12,
          borderBottomWidth: 1,
          padding: 0}}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={{ color: '#000', borderRadius: '15' }}
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
