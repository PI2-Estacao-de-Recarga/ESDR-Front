import React, { useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';
import { authRepository } from '../../store/auth/authRepository';
import { useQuery } from "react-query";
import { getToken } from '../../utils/getToken';
import jwt_decode from 'jwt-decode';
import { useEffect } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Teste',
    email: 'teste@email.com',
    cpf: '***.***.***-**',
  });
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const Token = getToken();
    setToken(Token);
    console.log(Token);
    var decoded = jwt_decode(Token);
    setUserId(decoded.userId);
  }, [])

  const query = useQuery(['getUser', token, userId], () => authRepository.getUser(token, userId), {
    initialData: profile,
  });

  useEffect(() => {
    console.log(query.data);
    setProfile({
      ...profile,
      cpf: query.data.cpf,
      name: query.data.name,
      email: query.data.email,
    });
  }, [query.data])

  return (
    <View style={styles.container}>
      {/* <ActivityIndicator animating={isLoading} color="#000000" size="large" /> */}
      <View style={styles.profilePic}>
        <Image
          style={styles.profilePicImage}
          source={require('../../../assets/profilePic.png')}
        />
      </View>
      <View style={styles.profileContent}>
        <Text style={styles.title}>Nome</Text>
        <Text style={styles.body}>
          {profile.name}
        </Text>
        <Text style={styles.title}>Email</Text>
        <Text style={styles.body}>
          {profile.email}
        </Text>
        <Text style={styles.title}>CPF</Text>
        <Text style={styles.body}>
          {profile.cpf}
        </Text>
      </View>
      <BottomTabs icons={bottomTabIcons} />
    </View>
  );
}

export default Profile;