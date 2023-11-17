import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

// App als SUB-Klasse der importierten Component (App erbt von Component)
// Komponenten werden nicht mehr als Klassen geschrieben
// export default class App extends Component {

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.square} />
        <View style={styles.box} />
        <View style={styles.box2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  square: {
    width: 150,
    height: 150,
    backgroundColor: "midnightblue",
  },
  box: {
    width: 100,
    height: 150,
    backgroundColor: "maroon",
  },
  box2: {
    width: 200,
    height: 250,
    backgroundColor: "lightslategrey",
  },
});
