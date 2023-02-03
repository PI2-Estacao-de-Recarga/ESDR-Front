import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

export default function RadioButton({ data, onSelect, inUse }) {
  const [items, setItems] = useState(data);
  const [userOption, setUserOption] = useState(null);

  useEffect(() => {
    if (inUse.length > 0) {
      inUse.map((item) => {
        if (item.name === "Tomada 1") {
          setItems(items.pop(items.indexOf("Celular")));
        } else if (item.name === "Tomada 2") {
          setItems(items.pop(items.indexOf("Patinete/Bike T2")));
        } else if (item.name === "Tomada 3") {
          setItems(items.pop(items.indexOf("Patinete/Bike T3")));
        }
      });
    }
  }, [])

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
