import { Image, StyleSheet, Text, View } from "react-native";

export default function ProfileCard({ name, age, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}, {age}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "95%",
    height: "75%",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  info: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  name: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
});
