import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function MinusBtn({ onMinusScore, side }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onMinusScore(side);
      }}
    >
      <Text style={styles.minus_text}>-1</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#262626",
    borderColor: "white",
    borderWidth: 4,
    margin: 5,
    padding: 6,
  },
  minus_text: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 18,
  },
});
