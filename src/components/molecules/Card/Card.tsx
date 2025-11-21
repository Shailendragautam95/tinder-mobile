import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const { width } = Dimensions.get("window");
const SWIPE_THRESHOLD = 120;

export default function Card({ person, onLike, onDislike }) {
  const translateX = useSharedValue(0);
  const rotate = useSharedValue(0);

  const pan = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      rotate.value = event.translationX / 20;
    })
    .onEnd(() => {
      if (translateX.value > SWIPE_THRESHOLD) {
        runOnJS(onLike)(person);
        translateX.value = withSpring(500);
      } else if (translateX.value < -SWIPE_THRESHOLD) {
        runOnJS(onDislike)(person);
        translateX.value = withSpring(-500);
      } else {
        translateX.value = withSpring(0);
        rotate.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { rotateZ: `${rotate.value}deg` },
    ],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Image source={{ uri: person.image }} style={styles.image} />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9,
    height: "70%",
    borderRadius: 15,
    overflow: "hidden",
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
