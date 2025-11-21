// src/components/organisms/SwipeItem.tsx
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { StyleSheet } from "react-native";

// Reanimated imports (only reanimated exports here)
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

// Gesture imports must come from react-native-gesture-handler
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import axiosClient from "../../lib/axiosClient";
import OpponentCard from "../molecules/OpponentCard";

export default function SwipeItem({ person, onSwiped }) {
  const queryClient = useQueryClient();

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const swipeGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd((event) => {
      if (event.translationX > 120) {
        // RIGHT → LIKE
        axiosClient.post(`/like/${person.id}`).then(() => {
          queryClient.invalidateQueries(["people"]); // refresh Home
        });
        translateX.value = withSpring(500);

        // call onSwiped (if provided) on the JS thread after animation
        if (onSwiped) onSwiped();
      } else if (event.translationX < -120) {
        // LEFT → DISLIKE
        axiosClient.post(`/dislike/${person.id}`).then(() => {
          queryClient.invalidateQueries(["people"]); // refresh Home
        });
        translateX.value = withSpring(-500);

        if (onSwiped) onSwiped();
      } else {
        // RESET
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { rotate: `${translateX.value / 20}deg` },
    ],
  }));

  return (
    <GestureDetector gesture={swipeGesture}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <OpponentCard
          name={person.name}
          age={person.age}
          location={person.location}
          picture={person.picture_url}
        />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    width: "85%",
    height: "70%",
    alignSelf: "center",
  },
});
