import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ResetBtn({ onScoreReset }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onScoreReset();
      }}
    >
      <MaterialCommunityIcons name="restart" size={26} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#262626",
    borderColor: "white",
    borderWidth: 4,
    margin: 5,
    padding: 6,
  },
  score_text: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontSize: 20,
  },
});
