import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import SwipeDeck from "../components/organisms/SwipeDeck";
import usePeople from "../hooks/usePeople";

export default function HomeScreen() {
  const { data, isLoading, error, refetch } = usePeople();

  if (isLoading) return <ActivityIndicator style={{ marginTop: 80 }} />;
  if (error) return <Text style={{ marginTop: 80 }}>Error loading people</Text>;

  if (!data || data.length === 0)
    return (
      <Text style={{ marginTop: 80 }}>
        No more profiles
      </Text>
    );

  return (
    <View style={styles.container}>
      <SwipeDeck data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
