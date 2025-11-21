import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import useLikedPeople from "../hooks/useLikedPeople";

export default function LikedScreen() {
  const { data, isLoading, error } = useLikedPeople();

  if (isLoading) return <Text style={styles.center}>Loading...</Text>;
  if (error) return <Text style={styles.center}>Error loading liked people</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liked Profiles ❤️</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.picture_url }} style={styles.image} />
            <Text style={styles.name}>{item.name}, {item.age}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  center: { flex: 1, textAlign: "center", marginTop: 80 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  card: { marginBottom: 20, alignItems: "center" },
  image: { width: 120, height: 120, borderRadius: 10 },
  name: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
  location: { color: "gray" },
});
