import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  option: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  inUse: {

  },
  unselected: {
    backgroundColor: "#575757",
    margin: 5,
    borderRadius: 10,
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  selected: {
    backgroundColor: "#111111",
    margin: 5,
    borderRadius: 10,
    width: 200,
    height: 40,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  }
});

export default styles;
