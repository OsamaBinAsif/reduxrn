import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TodoList = ({ todos, toggleTodo }) => {
  const todoText = todos.map((todo) => {
    return (
      <View>
        {console.log("todo", todo)}
        <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
          <Text
            style={{
              fontSize: 24,
              textDecorationLine: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </Text>
        </TouchableOpacity>
      </View>
    );
  });
  return <View>{todoText}</View>;
};

export default TodoList;

const styles = StyleSheet.create({});
