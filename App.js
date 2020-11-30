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
  TextInput,
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

const styles = StyleSheet.create({});
