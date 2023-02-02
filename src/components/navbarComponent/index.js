import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { authRepository } from '../../store/auth/authRepository';
import { useQuery } from "react-query";
import { getToken } from '../../utils/getToken';
import jwt_decode from 'jwt-decode';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

const NavbarComponent = () => {
    const [carregarOption, setCarregarOption] = useState(false);
    const [amount, setAmount] = useState({
        name: 'Teste',
        balance: '0'
    });
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const Token = getToken();
        setToken(Token);
        var decoded = jwt_decode(Token);
        setUserId(decoded.userId);
    }, [])

    const query = useQuery(['getUser', token, userId], () => authRepository.getUser(token, userId), {
        initialData: amount,
        enabled: !!token,
    });

    useEffect(() => {
        setAmount({
            ...amount,
            name: query.data.name,
            balance: query.data.balance,
        });
    }, [query.data])

    return (
        <View style={styles.container}>
 
            <Icon name="attach-money" size={30} color="#000" />
            {query.isLoading || query.isFetching ?
                <ActivityIndicator size={20} color="#000000" />
                :
                <>
                    <Text style={[styles.body, styles.textLeft]}>
                        {amount.balance}
                    </Text>
                </>}
                <TouchableOpacity
          onPress={() => setCarregarOption(true)}
        >
      <Icon name="info" size={30} color="#000" style={styles.iconRight} />
      </TouchableOpacity>
      <Modal
        animationType={'slide'}
        transparent={true}
        visible={carregarOption}
        onRequestClose={() => {
          setCarregarOption(!carregarOption);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.centeredView}>
            <Text style={styles.paragraph}>
              {" "}
              Compre créditos e utilize-os{'\n'}{" "}
              {" "}    para recarregar seu{'\n'}{" "}
              celular, patinete ou bicicleta!{" "}
            </Text>
          <Text style={styles.titleParagraph}>
              {" "}
              VALORES {" "}
            </Text>
            <Text style={styles.paragraph}>
              {" "}
              1 crédito  =  R$0,05{" "}
            </Text>
            <Text style={styles.paragraph}>
              {" "}
              1 minuto de uso =  1 crédito{" "}
            </Text>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.buttonClose}
                onPress={() => {setCarregarOption(false)}}>
                <Text style={styles.textStyle}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
        </View>
    );
};

export default NavbarComponent;