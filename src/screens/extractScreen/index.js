import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Card, Header, Input } from 'react-native-elements';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';

const ExtractPage = ({ navigation }) => {

    return (
        <View>
            <Text>
                Extrato
            </Text> 
            <BottomTabs icons={bottomTabIcons} />
        </View>
    );
};

export default ExtractPage;