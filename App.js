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
        <View style={styles.box2}>
          <View
            style={{ width: "100%", height: 30, backgroundColor: "black" }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: "50%"
  },
  square: {
    flex: 1, // flex > 0 --> maximale Ausdehnung
    backgroundColor: "midnightblue",
  },
  box: {
    flex: 2,
    backgroundColor: "maroon",
  },
  box2: {
    flex: 3,
    backgroundColor: "lightslategrey",
  },
});
