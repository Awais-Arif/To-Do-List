import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  // KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import {KeyboardAvoidingView} from "react-native-web";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (task) {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask("");
    } else {
      // console.log("error");
      Keyboard.dismiss();
      setTask("");
    }
  };

  const completeTask = (index) => {
    let itemscopy = [...taskItems];
    itemscopy.splice(index, 1);
    setTaskItems(itemscopy);
  };

  return (
    <View style={styles.container}>
      {/* TODAY'S TASKS */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is where tasks will go */}
          {/* <Task text="Task 1" />
          <Task text="Task 2" /> */}

          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => completeTask(index)}>
                <Task key={index} text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a Task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <View style={styles.clearbtnwrapper}>
        <TouchableOpacity onPress={() => setTaskItems([])}>
          <View style={styles.clearbtn}>
            <Text style={{fontSize: 20}}>Clear All</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEAED",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  items: {
    marginTop: 30, //margin of task we are adding
  },
  writeTaskWrapper: {
    position: "sticky", //item moves with th expansion of upper view
    // bottom: 60,
    // marginTop: "150%",
    top: 500,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    // paddingVertical: 15,
    width: 250,
    borderRadius: 60,
    padding: 15,
    backgroundColor: "#FFF",
    borderColor: "#COCOCO",
    borderWidth: 1,
  },
  addWrapper: {
    backgroundColor: "#FFF",
    borderRadius: 60,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#COCOCO",
    borderWidth: 1,
  },
  addText: {
    fontSize: 36,
  },
  clearbtn: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    width: 200,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#COCOCO",
    borderWidth: 1,
  },
  clearbtnwrapper: {
    position: "sticky", //item moves with th expansion of upper view
    top: 570,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
