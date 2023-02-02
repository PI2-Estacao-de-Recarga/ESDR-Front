import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';
import NavbarComponent from '../../components/navbarComponent';
import { authRepository } from '../../store/auth/authRepository';
import { useQuery } from "react-query";
import { getToken } from '../../utils/getToken';
import jwt_decode from 'jwt-decode';
import Operations from '../../components/operations';

const Statement = () => {
  const [operations, setOperations] = useState({
    name: 'Teste',
    operations: [{}]
  });
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const Token = getToken();
    var decoded = jwt_decode(Token);
    setUserId(decoded.userId);
    setToken(Token);
  }, [])

  const query = useQuery(['getUser', token, userId], () => authRepository.getUser(token, userId), {
    initialData: operations,
    enabled: !!token,
  });

  useEffect(() => {
    setOperations({
      ...operations,
      name: query.data.name,
      operations: query.data.operations,
    });
  }, [query.data])

  return (
    <View style={styles.container}>
      <NavbarComponent />
      {query.isLoading || query.isFetching ?
        <ActivityIndicator size={80} color="#000000" />
        :
        <>
          <View style={styles.page}>
            <Text style={styles.body}>
              Minhas operações:
            </Text>
            <Operations operations={operations.operations} />
          </View>
        </>}
      <BottomTabs icons={bottomTabIcons} />
    </View>
  );
}

export default Statement;
