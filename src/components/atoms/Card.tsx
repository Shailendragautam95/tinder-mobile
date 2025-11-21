import { StyleSheet, View } from "react-native";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    elevation: 5,
    shadowColor: "#000",
  },
});
