import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  useWindowDimensions,
  Alert,
} from "react-native";
import Meow from "@/components/Cat";

export default function TablePage() {
  return (
    <View style={styles.container}>
      <Text>Hello from the Table page!</Text>
      <Meow />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  menuItemsContainer: {
    flex: 1,
    padding: 20,
  },
});
