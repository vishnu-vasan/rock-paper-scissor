import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Game from "./Game";

const Start = (props) => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [max, setMax] = useState("");

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container3}>
        <Text>Enter Player 1:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setName1(value)}
        />
        <Text>Enter Player 2:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setName2(value)}
        />
        <Text>Enter Max Score:</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={(value) => setMax(parseInt(value))}
        />
        <Game player1={name1} player2={name2} maxScore={max} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 200,
    borderColor: "black",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 5,
    borderRadius: 50,
    margin: 5,
    width: 200,
  },
  container3: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 700,
  },
});
export default Start;
