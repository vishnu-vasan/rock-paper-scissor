import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  TouchableHighlight,
  Image,
  Text,
} from "react-native";

export default function App() {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const sample_alert = (weapon, id) => {
    if (weapon == "Rock") alert("Player" + id + " Pressed on Rock");
    if (weapon == "Paper") alert("Player" + id + " Pressed on Paper");
    if (weapon == "Scissor") alert("Player" + id + " Pressed on Scissor");
    if (id == 1) {
      setPlayer1Score((player1Score) => player1Score + 1);
    }
    if (id == 2) {
      setPlayer2Score((player2Score) => player2Score + 1);
    }
  };
  const resetGameHandler = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
  };
  return (
    <View>
      <View style={styles.container}>
        <Text>{"Player 2\n"}</Text>
        <TouchableOpacity onPress={sample_alert.bind(this, "Rock", "2")}>
          <Image source={require("./assets/rock.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={sample_alert.bind(this, "Paper", "2")}>
          <Image source={require("./assets/paper.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={sample_alert.bind(this, "Scissor", "2")}>
          <Image source={require("./assets/scissors.png")} />
        </TouchableOpacity>
      </View>

      <View style={styles.line} />
      <Text>Score</Text>

      <TouchableHighlight style={styles.circle}>
        <View>
          <Text>{player1Score}</Text>
          <Text>{player2Score}</Text>
        </View>
      </TouchableHighlight>

      <Button
        style={styles.buttonContainer}
        title="Restart"
        onPress={resetGameHandler}
      />
      <View style={styles.container1}>
        <Text>{"Player 1"}</Text>
        <TouchableOpacity onPress={sample_alert.bind(this, "Rock", "1")}>
          <Image source={require("./assets/rock.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={sample_alert.bind(this, "Paper", "1")}>
          <Image source={require("./assets/paper.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={sample_alert.bind(this, "Scissor", "1")}>
          <Image source={require("./assets/scissors.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 200,
    borderColor: "black",
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 400,
    borderColor: "black",
  },
  circle: {
    borderRadius: 75,
    width: 150,
    height: 150,
    backgroundColor: "#87ceeb",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: Dimensions.get("window").width * 0.3,
    marginTop: -90,
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    marginTop: 250,
  },
  buttonContainer: {
    marginTop: 10,
    width: 300,
    maxWidth: "30%",
    color: "#FE434C",
    alignItems: "center",
    borderRadius: 15,
  },
});
