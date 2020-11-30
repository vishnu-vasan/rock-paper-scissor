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
import Game from "./screens/Game";

export default function App() {
  return (
    <View>
      <Start />
    </View>
  );
}

const styles = StyleSheet.create({});
