import { StyleSheet, Text } from "react-native";

interface Props {
  children: React.ReactNode;
  style?: object;
}

export default function AppText({ children, style }: Props) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#222",
  },
});
