import React, { useRef, useState } from "react";
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
  const [numOfRounds, setNumOfRounds] = useState(1);
  const player1Input = useRef("");
  const player2Input = useRef("");
  const rounds = useRef(5);
  const input_press_1 = (weapon) => {
    setNumOfRounds((numOfRounds) => numOfRounds + 1);
    if (numOfRounds > rounds.current) {
      alert("Game Over\n" + "Number of Rounds played: " + rounds.current);
      resetGameHandler();
    }
    player1Input.current = weapon;
  };
  const input_press_2 = (weapon) => {
    player2Input.current = weapon;
    if (player2Input !== undefined) {
      calculate_point();
    }
  };

  const calculate_point = () => {
    if (player1Input.current === "Rock") {
      if (player2Input.current === "Paper") {
        setPlayer2Score((player2Score) => player2Score + 1);
      }
      if (player2Input.current === "Scissor") {
        setPlayer1Score((player1Score) => player1Score + 1);
      }
      if (player2Input.current === player1Input.current) {
        alert("No points this Round!");
      }
      player1Input.current = "";
      player2Input.current = "";
    }
    if (player1Input.current === "Paper") {
      if (player2Input.current == player1Input.current) {
        alert("No points this Round!");
      } else if (player2Input.current === "Rock") {
        setPlayer1Score((player1Score) => player1Score + 1);
      } else if (player2Input.current === "Scissor") {
        setPlayer2Score((player2Score) => player2Score + 1);
      }
      player1Input.current = "";
      player2Input.current = "";
    }
    if (player1Input.current === "Scissor") {
      if (player2Input.current == "Paper") {
        setPlayer1Score((player1Score) => player1Score + 1);
      } else if (player2Input.current === player1Input.current) {
        alert("No points this Round!");
      } else if (player2Input.current === "Rock") {
        setPlayer2Score((player2Score) => player2Score + 1);
      }
      player1Input.current = "";
      player2Input.current = "";
    }
  };
  const resetGameHandler = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    player1Input.current = "";
    player2Input.current = "";
    setNumOfRounds(0);
  };
  return (
    <View>
      <View style={styles.container}>
        <Text>{"Player 1\n"}</Text>
        <TouchableOpacity onPress={input_press_1.bind(this, "Rock")}>
          <Image source={require("./assets/rock.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={input_press_1.bind(this, "Paper")}>
          <Image source={require("./assets/paper.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={input_press_1.bind(this, "Scissor")}>
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

      <View style={styles.buttonContainer}>
        <Button title="Restart" onPress={resetGameHandler} />
      </View>

      <View style={styles.container1}>
        <Text>{"Player 2"}</Text>
        <TouchableOpacity onPress={input_press_2.bind(this, "Rock")}>
          <Image source={require("./assets/rock.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={input_press_2.bind(this, "Paper")}>
          <Image source={require("./assets/paper.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={input_press_2.bind(this, "Scissor")}>
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
    borderRadius: 100,
    borderColor: "#000",
    color: "#c717fc",
    marginTop: 10,
    marginLeft: -18,
    justifyContent: "center",
    alignItems: "center",
  },
});
