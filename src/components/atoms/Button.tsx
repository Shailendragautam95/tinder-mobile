import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#FF5864",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "90%",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
