import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

export default function ScorePlate({ onPlusScore, score, side, color }) {
  return (
    <Pressable
      style={[styles.container, { backgroundColor: color }]}
      onPress={() => {
        onPlusScore(side);
      }}
    >
      <Text style={styles.score_text}>{score}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 4,
    marginTop: 10,
    marginHorizontal: 5,
    height: 255,
  },
  score_text: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 160,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  },
});
