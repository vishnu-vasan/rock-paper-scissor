import React from "react";
import {
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  const sample_alert = () => {
    alert("Tapped the button");
  };
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={sample_alert}>
          <Image source={require("./assets/rock.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={sample_alert}>
          <Image source={require("./assets/paper.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={sample_alert}>
          <Image source={require("./assets/scissors.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.container1}>
        <TouchableOpacity onPress={sample_alert}>
          <Image source={require("./assets/rock.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={sample_alert}>
          <Image source={require("./assets/paper.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={sample_alert}>
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
    height: 1100,
    borderColor: "black",
  },
});
