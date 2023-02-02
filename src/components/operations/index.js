import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './styles';
import moment from 'moment';

const Operations = ({ operations }) => {

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

    if (operations.length === 0) {
        return <Text style={styles.body}>Você não tem operações registradas.</Text>;
    }
    else {
        return (
            <ScrollView>
                {operations.map((item) => (
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
    )};
};

export default Operations;