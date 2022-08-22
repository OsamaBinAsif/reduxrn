import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { addTodoo } from "../actions";

const AddToDo = (props) => {
  const [text, setText] = useState("");
  const addTodo = () => {
    props.dispatch(addTodoo(text));
    setText("")
    //update redux store
  };
  return (
    <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
      <TextInput
        value={text}
        onChangeText={(text) => {
          setText(text);
        }}
        placeholder="Eg. Create New Video"
        style={{
          borderWidth: 1,
          borderColor: "#f2f2e1",
          backgroundColor: "#eaeaea",
          height: 50,
          flex: 1,
          padding: 5,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          addTodo();
        }}
      >
        <View
          style={{
            height: 50,
            backgroundColor: "#eaeaea",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons
            name="md-add"
            size={30}
            style={{ color: "#de9595", padding: 10 }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

//const mapStateToProps = (state) => {
//  return {
//    state
//  };
//};
//const mapDispatchToProps = (dispatch) => {
//  return {
//    dispatch: 
//  };
//};

export default connect()(AddToDo);

const styles = StyleSheet.create({});
