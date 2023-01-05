import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Card, Header, Input } from 'react-native-elements';
import FooterComponent from '../../components/footer';
import HeaderComponent from '../../components/header';

const HomePage = ({ navigation }) => {

    return (
        <View style={styles.container}>
        <HeaderComponent></HeaderComponent>
        <FooterComponent></FooterComponent>
        </View>
    );
};

export default HomePage;