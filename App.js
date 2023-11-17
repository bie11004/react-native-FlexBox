import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

// App als SUB-Klasse der importierten Component (App erbt von Component)
// Komponenten werden nicht mehr als Klassen geschrieben
// export default class App extends Component {

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, { backgroundColor: "midnightblue" }]} />
        <View style={[styles.box, { backgroundColor: "springgreen" }]} />
        <View
          style={[
            styles.box,
            { alignSelf: "flex-end", backgroundColor: "goldenrod" },
          ]}
        />
        <View style={[styles.box, { backgroundColor: "hotpink" }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // flex >0 = max Ausdehnung
    flexDirection: "column", // Ausrichtung der Hauptachse
    justifyContent: "center", // Anordnung der Hauptachse
    alignItems: "center", // Anordnung auf der Querachse
  },
  box: {
    width: 100,
    height: 100,
  },
});

// FlexBox - jede View ist direkt ein FleBox-Layout
// flexDirection = wie sollen die Elemente angeordnet werden?
