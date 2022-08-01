import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      {/* <View style={styles.itemLeft}> */}
        <View style={styles.square}></View>
        <View style={styles.addedTask}><Text>{props.text}</Text></View>
      {/* </View> */}

      <View style={styles.circular}></View>

    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  // itemLeft: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   flexWrap: "wrap",
  // },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,           //necesaary to display
    borderRadius: 5,
  },
  addedTask: {
    flex: 1.7,
  }
});

export default Task;
