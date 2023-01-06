import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Card, Input } from 'react-native-elements';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

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
        onPress={() => navigation.navigate('login')}
      />
    </View>
  );
};

export default Register;