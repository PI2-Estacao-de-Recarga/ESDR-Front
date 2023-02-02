import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from '../../store/footer/footerSlice';
import { logout } from "../../store/auth/authSlice";
import { ModalSessionOut } from "../modalSessionOut";
import { setModalSessionOpen } from '../../store/modalSession/modalSessionSlice';

export const bottomTabIcons = [
    {
        name: 'home',
        active: 'https://img.icons8.com/material-rounded/24/null/home-page.png',
        inactive: 'https://img.icons8.com/material-outlined/24/null/home-page.png',
    },
    {
        name: 'statement',
        active: 'https://img.icons8.com/ios-glyphs/30/null/coin-wallet.png',
        inactive: 'https://img.icons8.com/material-outlined/24/null/coin-wallet.png',
    },
    {
        name: 'profile',
        active: 'https://img.icons8.com/material-sharp/24/null/user-male-circle.png',
        inactive: 'https://img.icons8.com/windows/32/null/user-male-circle.png',
    }
]

const BottonTabs = ({ icons }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { activeTab } = useSelector((state) => state.footer)
    const { expireIn, token } = useSelector((state) => state.auth.tokenInfo);

    if (token !== "" && expireIn !== "" && expireIn * 1000 <= Date.now()) {
        console.log('token expired:: ', Date.now(), ' - ', expireIn * 1000, " ::", expireIn * 1000 <= Date.now());
        dispatch(logout());
        dispatch(setModalSessionOpen());
    }

    const buttonPress = (icon) => {
        navigation.navigate(icon.name);
        dispatch(setActiveTab(icon.name));
    }

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => buttonPress(icon)}>
            <Image
                source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} style={styles.icon} />
        </TouchableOpacity>
    )

    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
            <ModalSessionOut />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        backgroundColor: '#FFF',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    icon: {
        width: 30,
        height: 30,
    }
})

export default BottonTabs;
