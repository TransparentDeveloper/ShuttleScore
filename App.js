import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import NamePlate from "./components/NamePlate";
import ScorePlate from "./components/ScorePlate";
import CourtImagePlate from "./components/CourtImagePlate";
import ChangeCourtBtn from "./components/ChangeCourtBtn";
import MinusBtn from "./components/MinusBtn";
import ResetBtn from "./components/ResetBtn";

export default function App() {
  const [name, setName] = useState(["A", "B"]); // 팀명
  const [score, setScore] = useState([0, 0]); // 점수
  const [color, setColor] = useState(["#FE401A", "#1F49F9"]); // 점수판 식별 색상
  const [pos, setPos] = useState([-1]); // 서비스 위치
  const [streak, setStreak] = useState(false);

  useEffect(() => {
    if (pos[0] == pos[1]) setStreak(true);
    else setStreak(false);
  }, [pos]);

  function onPlusScore(side) {
    var score_arr = [...score];
    var pos_arr = [...pos];

    if (side == "left") {
      if (score_arr[0] < 99) {
        score_arr[0]++;
        pos_arr.unshift(0);
      }
    } else if (side == "right") {
      if (score_arr[1] < 99) {
        score_arr[1] += 1;
        pos_arr.unshift(1);
      }
    }

    if (pos_arr.length >= 100) {
      //만약 pos 의 길이가 100 이상이 되면, 가장 뒤의 원소는 삭제
      pos_arr.pop();
    }
    setScore(score_arr);
    setPos(pos_arr);
  }
  function onMinusScore(side) {
    var score_arr = [...score];
    var pos_arr = [...pos];
    if (side == "left") {
      if (score_arr[0] > 0) {
        score_arr[0]--;
        if (pos_arr[0] == 0) pos_arr.shift();
      }
    } else if (side == "right") {
      if (score_arr[1] > 0) {
        score_arr[1]--;
        if (pos_arr[0] == 1) pos_arr.shift();
      }
    }
    if (score_arr[0] == 0 && score_arr[1] == 0) {
      pos_arr.length = 0;
      pos_arr.unshift(-1);
    }
    setScore(score_arr);
    setPos(pos_arr);
  }
  function onChangeAllState() {
    var score_arr = [...score];
    var temp = score_arr[0];
    score_arr[0] = score_arr[1];
    score_arr[1] = temp;
    setScore(score_arr);

    var name_arr = [...name];
    temp = name_arr[0];
    name_arr[0] = name_arr[1];
    name_arr[1] = temp;
    setName(name_arr);

    var color_arr = [...color];
    temp = color_arr[0];
    color_arr[0] = color_arr[1];
    color_arr[1] = temp;
    setColor(color_arr);

    if (pos.length == 1) return;

    var pos_arr = [...pos];
    pos_arr = pos_arr.map((num) => {
      if (num == -1) return -1;
      else if (num == 0) return 1;
      else return 0;
    });
    setPos(pos_arr);
  }
  function onScoreReset() {
    var score_arr = [...score];
    score_arr[0] = score_arr[1] = 0;
    setScore(score_arr);

    var pos_arr = [...pos];
    pos_arr.length = 0;
    pos_arr.unshift(-1);
    setPos(pos_arr);
  }

  return (
    <View style={styles.container}>
      <View style={styles.namebox}>
        <NamePlate name={name[0]} />
        <NamePlate name={name[1]} />
      </View>

      <View style={styles.mainbox}>
        <ScorePlate
          onPlusScore={onPlusScore}
          score={score[0]}
          side={"left"}
          color={color[0]}
        />
        <View style={styles.utilbox}>
          <View style={styles.utilbtnbox}>
            <MinusBtn onMinusScore={onMinusScore} side={"left"} />
            <ChangeCourtBtn onChangeAllState={onChangeAllState} />
            <ResetBtn onScoreReset={onScoreReset} />
            <MinusBtn onMinusScore={onMinusScore} side={"right"} />
          </View>
          <CourtImagePlate
            pos={pos[0]}
            is_bottom={score[pos[0]] % 2 == 0}
            is_streak={streak}
          />
        </View>
        <ScorePlate
          onPlusScore={onPlusScore}
          score={score[1]}
          side={"right"}
          color={color[1]}
        />
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  namebox: {
    flex: 0.17,
    display: "flex",
    flexDirection: "row",
  },
  mainbox: {
    flex: 0.83,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  utilbox: {
    flex: 1.6,
    alignItems: "center",
    justifyContent: "center",
  },
  utilbtnbox: {
    flexDirection: "row",
    alignItems: "space-between",
  },
});
