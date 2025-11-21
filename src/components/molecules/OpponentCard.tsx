import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
  age: number;
  location: string;
  picture: string;
};

export default function OpponentCard({ name, age, location, picture }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: picture }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}, {age}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#eee",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  info: {
    position: "absolute",
    bottom: 20,
    left: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  location: {
    fontSize: 18,
    color: "white",
  },
});
