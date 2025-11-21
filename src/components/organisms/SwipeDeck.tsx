import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SwipeItem from "./SwipeItem";

export default function SwipeDeck({ data }) {
  const [people, setPeople] = useState(data);

  const handleSwiped = () => {
    setPeople((prev) => prev.slice(1)); // remove first card
  };

  return (
    <View style={styles.container}>
      {people.map((person, index) => (
        <SwipeItem
          key={person.id}
          person={person}
          index={index}
          onSwiped={handleSwiped}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
