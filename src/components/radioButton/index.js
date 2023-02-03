import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

export default function RadioButton({ onSelect, inUse }) {
  const data = [
    {value: "Celular", id: "Tomada 1"},
    {value: "Patinete/Bike T2", id: "Tomada 2"},
    {value: "Patinete/Bike T3", id: "Tomada 3"},
  ];
  console.log('DATA:: ', data)

  const [items, setItems] = useState(data);
  const [userOption, setUserOption] = useState(null);

  useEffect(() => {
    console.log('inUse:: ', inUse)
    if (inUse.length > 0) {
      setItems(prevItems =>
        prevItems.filter((item, index) => {
          return item.id !== inUse[index].name;
        })
      );
    }
  }, []);


  const selectHandler = (value, indice) => {
    onSelect(value.value);
    setUserOption(value.value);
    console.log("value", value)
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          color: "black",
          textAlign: "center",
        }}
      >
        Tomadas Dísponiveis:
      </Text>
      {items.length === 0
        ? (
          <View style={styles.container}>
            <Text style={styles.itemTitle2}>Nenhuma tomada disponível para uso</Text>
          </View>
        )
        : items.map((item, indice) => {
          return (
            <Pressable
              style={
                item.value === userOption ? styles.selected : styles.unselected
              }
              onPress={() => selectHandler(item, indice)}
              key={indice}
            >
              <Text style={styles.option} key={item.value}> {item.value}</Text>
            </Pressable>
          );
        })
      }
    </View>
  );
}
