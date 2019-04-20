import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { CheckBox } from "react-native-elements";

import { Actions } from "react-native-router-flux";

var DismissKeyboard = require("dismissKeyboard"); // Require React Native's utility library.

export default class EstateTypeForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      desc: ""
    };

  }

  updateValue(text, field) {
    this.setState({ [field]: text });
  }

  estatetype() {
   this.props.navigation.navigate("EstateTypeList");
   }
  submit() {
    let collection = {};
    var url = "http://192.168.42.47:8080/WebAPI/api/estateTypes";

    return fetch(url, {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        estateTypeDescription: this.state.title,
        estateTypeName: this.state.desc,
        createBy:"string",
      }),
    
    }).then((response) => response.json())
    .then((responseJson) => {

      // {() => this.estatetype()}
     console.warn(responseJson)    
    })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Estate TypeName"
            placeholderTextColor="#ffffff"
            onChangeText={text => this.updateValue(text, "title")}

            // ref={input => (this.password = input)}
          />

          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Estate Description"
            placeholderTextColor="#ffffff"
            onChangeText={text => this.updateValue(text, "desc")}
            // ref={input => (this.password = input)}
          />

          <TouchableOpacity style={styles.button} onPress={() => this.submit()}>
            <Text style={styles.buttonText}>{this.props.type}</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  inputBox: {
    width: 300,
    height: 40,
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: "#1c313a",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
