import React from "react";
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
  const sample_alert = () => {
    alert("Tapped the button");
  };
  return (
    <View>
      <View style={styles.container}>
      <Text>{'Player 2\n'}</Text>
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
      
      <View style={styles.line}/>
      <Text>Score</Text>

      <TouchableHighlight style = {styles.circle}>
      <Text>{'10\n15'}</Text>
      </TouchableHighlight>

      <View style={styles.container1}>
      <Text>{'Player 1'}</Text>
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
    height: 500,
    borderColor: "black",
  },
  circle: {
    borderRadius: 75,
    width: 150,
    height: 150,
    backgroundColor:'#87ceeb',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Dimensions.get('window').width * 0.3,
    marginTop: -90,
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginTop:250,
  },
});
