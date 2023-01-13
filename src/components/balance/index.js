import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function Balance() {

    //Alterar depois para receber de maneira externa ao app se a tomada estará ou não em uso.
    const [estado] = useState({
        status1: "Em uso",
        status2: "Disponível para uso"
    })
    const [useTime,setUseTime] = useState("00:00")

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle1}>{estado.status1}</Text>
                <Text style={styles.itemTitle2}>TOMADA 1</Text>
                <View style={styles.useTime}>
                    <Text style={styles.itemTitle3}>
                        tempo restante
                        {'\n'}de uso:
                    </Text>
                    <Text style={styles.itemTitle3}>
                        {useTime}
                    </Text>
                </View>
            </View>
        </View>
    );
}


export default Balance;