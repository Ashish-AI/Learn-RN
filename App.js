import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [task, setTask] = React.useState("");
  const [goalArray, setGoalArray] = React.useState([]);

  function handleTextInput(text) {
    setTask(text);
  }
  function handlePress() {
    setGoalArray((currentGoals) => [...currentGoals, task]);
    console.log(goalArray);
  }

  return (
    <View style={style.parent}>
      <View>
        <TextInput
          placeholder="Add item"
          onChangeText={handleTextInput}
          style={{ borderColor: "red", borderWidth: 1 }}
        />
      </View>
      <View style={{ padding: 20 }}>
        <Button title="Add" onPress={handlePress}></Button>
      </View>

      <View>
        {goalArray.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  parent: {
    padding: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
