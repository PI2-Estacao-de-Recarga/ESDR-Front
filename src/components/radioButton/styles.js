import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  option: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },
  unselected: {
    backgroundColor: "#9E9E9E",
    margin: 5,
    padding: 5,
    borderRadius: 10,
    width: 150,
    alignSelf: "center",
    textAlign: "center"
  },
  selected: {
    backgroundColor: "#595959",
    margin: 5,
    padding: 5,
    borderRadius: 10,
    width: 150,
    alignSelf: "center",
    textAlign: "center"
  }
});
export default styles;
