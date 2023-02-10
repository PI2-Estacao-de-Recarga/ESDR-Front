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
        console.log("balance ::", hours, minutes, typeof hours, typeof minutes)
        return `${hours}:${minutes}`;
    }

    const checaTempoNegativo = (tomada) => {
        const tomadaUseFinish = new Date(tomada.useFinish);
        const now = new Date();
        const differenceInMs = tomadaUseFinish.getTime() - now.getTime();
        const differenceInMinutes = differenceInMs / 60000;
        const hours = Math.floor(differenceInMinutes / 60);
        const minutes = Math.floor(differenceInMinutes % 60);

        return hours < 0 || minutes < 0;
    }

    const tomadasAtivas = (tomada, indice) => {
        // if (checaTempoNegativo(tomada)) {
        //     return <></>
        // }

        return (
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

    const handleRender = () => { 
        if (loading) {
            return (
                <View style={styles.container}>
                    <Text style={styles.itemTitle2}>Carregando...</Text>
                </View>
            )
        } else if (tomadas.length === 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.itemTitle2}>Nenhuma tomada em uso</Text>
                </View>
            )
        } else {
            return tomadas.map((tomada, indice) =>
                tomadasAtivas(tomada, indice)
            )
        }
    }

    return (
        <ScrollView
            style={styles.carrousel}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {handleRender()}
        </ScrollView>
    );
}


export default Balance;