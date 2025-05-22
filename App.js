import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const handleTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.container}>
      <View style={styles.taskwrapper}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Today's tasks</Text>
        <View style={styles.item}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
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
          placeholder="write a Task"
          placeholderTextColor={"#55BCF6"}
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <TouchableOpacity onPress={handleTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskwrapper: {
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 40,
    width: 250,
    textAlign: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    color: "#55BCF6",
    fontSize: 24,
  },
});
