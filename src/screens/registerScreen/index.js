import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Card, Input } from 'react-native-elements';
import styles from './styles';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.fontTitle}>
          ESDR
      </Text>
      <Text style={styles.fontRegister}>
        Register
      </Text>
      <TextInput
        style={styles.input}
        placeholder='Name'
        value={name}
        onChangeText={setName}
        autoCapitalize='none'
        autoCorrect={false}
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
        placeholder='CPF'
        value={cpf}
        onChangeText={setCpf}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder='Password Confirmation'
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('login')}
      >
        <Text style={styles.textButton}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;