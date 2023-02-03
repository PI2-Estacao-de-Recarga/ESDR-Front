import React from 'react';
import { View, Text, Image, ScrollView, RefreshControl, Pressable } from 'react-native';
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

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 3000);
    }, []);

    if (operations.length === 0) {
        return <Text style={styles.body}>Você não tem operações registradas.</Text>;
    }
    else {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <Pressable>
                    {operations.map((item, index) => (
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
                </Pressable>
            </ScrollView>
        )
    };
};

export default Operations;