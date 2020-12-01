import React from "react";
import {
  View,
  Text
} from "react-native";
import Start from "./screens/Start";

export default function App() {
  return (
    <View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 25,
          marginTop: 40,
          fontFamily: "serif",
        }}
      >
        Rock Paper Scissors
      </Text>
      <Start />
    </View>
  );
}


