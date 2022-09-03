import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ChangeCourtBtn({ onChangeAllState }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onChangeAllState();
      }}
    >
      <MaterialCommunityIcons name="swap-horizontal" size={26} color="#fff" />
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
});
