import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';
import NavbarComponent from '../../components/navbarComponent';
import { authRepository } from '../../store/auth/authRepository';
import { useQuery } from "react-query";
import { getToken } from '../../utils/getToken';
import jwt_decode from 'jwt-decode';
import moment from 'moment';

const Statement = () => {
  const [operations, setOperations] = useState({
    name: 'Teste',
    operations: [{
      createdAt: '2020-01-01T11:11:11.111Z',
      creditAmount: 111,
      id: '123456789123456897132456897',
      operationType: 'COMPRA',
      updatedAt: '2020-01-01T11:11:11.111Z'
    }]
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

  function formatDate(date) {
    return moment(date).format('DD/MM/YYYY');
  }

  function getSign(value) {
    if (value === 'COMPRA') {
      return '+';
    } else if (value === 'USO') {
      return '-';
    } else {
      return 'Invalid value';
    }
  }

  const query = useQuery(['getUser', token, userId], () => authRepository.getUser(token, userId), {
    initialData: operations,
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
      <NavbarComponent/>
      <View style={styles.page}>
        <Text style={styles.body}>
            Olá, {operations.name}, seu extrato:
          </Text>
          <ScrollView>
            {operations.operations.map((item)  => (
              <View key={item.id} style={styles.item}>
                <Text style={styles.date}>{formatDate(item.createdAt)}</Text>
                <View style={styles.movimentation}>
                  <Text style={styles.quantity}>
                    {getSign(item.operationType)}{item.creditAmount}
                  </Text>
                  <Image
                    source={require("../../../assets/dolar.png")}
                    style={styles.dolar}
                  />
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      <BottomTabs icons={bottomTabIcons} />
    </View>
  );
}

export default Statement;
