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
    marginHorizontal: 5,
    marginVertical: 10,
    height: "100%",
  },
  score_text: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 150,
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 20,
  },
});
