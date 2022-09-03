import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function NamePlate({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.team_name}>{name}</Text>
    </View>
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

    width: 200,
  },
  team_name: {
    textAlign: "center",
    color: "white",
    fontSize: 17,
  },
});
