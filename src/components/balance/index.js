import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { Pressable } from 'react-native';

function Balance({ tomadas, deactivatePlug, loading }) {
    //Alterar depois para receber de maneira externa ao app se a tomada estará ou não em uso.
    const [estado] = useState({
        status1: "Em uso",
        status2: "Disponível para uso"
    })
    const [useTime, setUseTime] = useState("00:00")

    const timeLeft = (tomada) => {
        const tomadaUseFinish = new Date(tomada.useFinish);
        const now = new Date();
        const differenceInMs = tomadaUseFinish.getTime() - now.getTime();
        const differenceInMinutes = differenceInMs / 60000;
        const hours = Math.floor(differenceInMinutes / 60);
        const minutes = Math.floor(differenceInMinutes % 60);

        return `${hours}:${minutes}`;

    }
    return (
        <ScrollView
            style={styles.carrousel}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {loading ? (
                <View style={styles.container}>
                    <Text style={styles.itemTitle2}>Carregando...</Text>
                </View>
            )
                : tomadas.length === 0 ? (
                    <View style={styles.container}>
                        <Text style={styles.itemTitle2}>Nenhuma tomada em uso</Text>
                    </View>
                )
                    : tomadas.map((tomada, indice) =>
                        <Pressable style={styles.container} key={indice}>
                            <View style={styles.item}>
                                <Text style={styles.itemTitle1}>{estado.status1}</Text>
                                <Text style={styles.itemTitle2}>{tomada.name}</Text>
                                <View style={styles.useTime}>
                                    <Text style={styles.itemTitle3}>
                                        tempo restante
                                        {'\n'}de uso:
                                    </Text>
                                    <Text style={styles.itemTitle3}>
                                        {timeLeft(tomada)}
                                    </Text>
                                </View>
                            </View>
                        </Pressable>
                    )
            }
        </ScrollView>
    );
}


export default Balance;