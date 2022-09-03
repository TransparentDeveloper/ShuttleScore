import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import Court from "../assets/Court.png";

export default function CourtImagePlate({ pos, is_bottom, is_streak }) {
  return (
    <ImageBackground style={styles.court_img} source={Court}>
      <View style={styles.left_area}>
        <View
          style={[
            styles.sub_area,
            pos == 0 && !is_bottom ? styles.set_filter_norm : null,
            pos == 0 && !is_bottom && is_streak
              ? styles.set_filter_streak
              : null,
          ]}
        />
        <View
          style={[
            styles.sub_area,
            pos == 0 && is_bottom ? styles.set_filter_norm : null,
            pos == 0 && is_bottom && is_streak
              ? styles.set_filter_streak
              : null,
          ]}
        />
      </View>
      <View style={styles.right_area}>
        <View
          style={[
            styles.sub_area,
            pos == 1 && is_bottom ? styles.set_filter_norm : null,
            pos == 1 && is_bottom && is_streak
              ? styles.set_filter_streak
              : null,
          ]}
        />
        <View
          style={[
            styles.sub_area,
            pos == 1 && !is_bottom ? styles.set_filter_norm : null,
            pos == 1 && !is_bottom && is_streak
              ? styles.set_filter_streak
              : null,
          ]}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  court_img: {
    flex: 1,
    minWidth: 285,
    resizeMode: "contain",
    flexDirection: "row",
  },
  left_area: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  right_area: {
    flex: 0.5,
    flexDirection: "column",
    alignItems: "flex-end",
  },
  sub_area: { flex: 0.5, width: "75%", borderRadius: 8 },

  set_filter_norm: {
    backgroundColor: "yellow",
    opacity: 0.9,
  },
  set_filter_streak: {
    backgroundColor: "orange",
    opacity: 0.9,
  },
});
