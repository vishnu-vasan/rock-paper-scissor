import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function App() {
  return (
    <View>
    <View style={styles.container}>
      <Button title="Rock"/>
      <Button title="Paper"/>
      <Button title="Scissor"/>
    </View>
    <View style={styles.container1}>
      <Button title="Rock"/>
      <Button title="Paper"/>
      <Button title="Scissor"/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-around',
    height: 200,
    borderColor: 'black',
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-around',
    height: 1200,
    borderColor: 'black',
  }
});
