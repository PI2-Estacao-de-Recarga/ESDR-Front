import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

export default function RadioButton({ data, onSelect, disable}) {
  const [userOption, setUserOption] = useState(null);
  const [tomada1, setTomada1] = useState(false);
  const [tomada2, setTomada2] = useState(false);
  const [tomada3, setTomada3] = useState(false);

  useEffect(() => {
    disable.forEach(item => {
      if (item == "Tomada 1")
        data[0].disable = true
      if (item == "Tomada 2")
        data[1].disable = true
        console.log("Aqui", data);
      if (item == "Tomada 3")
        data[2].disable = true
      });
  }, [])

  const selectHandler = (value, indice) => {
    onSelect(value.value);
    setUserOption(value.value);
    console.log("value", value)
  };

  return (
    <View>
      {data.map((item, indice) => {
        return (
          <Pressable
          disabled={item.disable}
            style={
              item.value === userOption ? styles.selected : styles.unselected
            }
            onPress={() => selectHandler(item, indice)}
          >
            <Text style={styles.option} key={item.value}> {item.value}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
