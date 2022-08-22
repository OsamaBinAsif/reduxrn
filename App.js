import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import TodoApp from "./src/TodoApp";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <TodoApp />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({

});
