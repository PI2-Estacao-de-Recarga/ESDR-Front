import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { authRepository } from '../../store/auth/authRepository';
import { useQuery } from "react-query";
import { getToken } from '../../utils/getToken';
import jwt_decode from 'jwt-decode'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

const NavbarComponent = () => {
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
        <Text style={styles.body}>
            {amount.balance}
        </Text>
        <Icon name="info" size={30} color="#000" style={styles.iconRight} />
        </View>
    );
};

export default NavbarComponent;