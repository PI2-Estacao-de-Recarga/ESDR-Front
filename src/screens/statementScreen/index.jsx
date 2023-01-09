import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import BottomTabs, { bottomTabIcons } from '../../components/footerComponent';

const Statement = () => {
  const [statment, setStatment] = useState([
    {
      id: 1,
      date: '01/01/2021',
      quantity: +100,
    },
    {
      id: 2,
      date: '02/01/2021',
      quantity: -200,
    },
    {
      id: 3,
      date: '03/01/2021',
      quantity: +300,
    }
  ]);

  return (
    <View style={styles.container}>
      {statment.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.date}>{item.date}</Text>
          <View style={styles.movimentation}>
            <Text style={styles.quantity}>
              {item.quantity}
            </Text>
            <Image
              source={require("../../../assets/dolar.png")}
              style={styles.dolar}
            />
          </View>
        </View>
      ))}
      <BottomTabs icons={bottomTabIcons} />
    </View>
  );
}

export default Statement;