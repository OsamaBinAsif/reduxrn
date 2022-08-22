import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AddToDo from "./containers/AddToDo";
import VisibleTodos from "./containers/VisibleTodos";

const TodoApp = () => {
  return (
    <View style={styles.container}>
      <AddToDo />
      <View>
        <VisibleTodos/>
      </View>
    </View>
  );
};

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    paddingTop: 40
  },
});
