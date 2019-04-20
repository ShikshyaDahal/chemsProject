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

var DismissKeyboard = require("dismissKeyboard"); // Require React Native's utility library.

export default class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.state = {
      itemHostname: "",
      itemStatus: "",
      itemDateReceive: "",
      itemDescription: "",
      itemType: ""
    };
  }
  updateValue(text, field) {
    this.setState({ [field]: text });
  }

  submit() {
    let collection = {};
    var url = "http://192.168.42.47:8080/WebAPI/api/deliveryItems";

    return fetch(url, {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        itemHostname: this.state.itemHostname,
        createBy: "abhishek",
        itemStatus: this.state.itemStatus,
        itemDateReceive: this.state.itemDateReceive,
        itemDescription: this.state.itemDescription,
        itemType: this.state.itemType
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.warn(responseJson);
        // return {this.request};
      })
      .catch(error => {
        console.error(error);
      });
  }
  state = {
    checked: false
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Host name"
            placeholderTextColor="#ffffff"
            selectionColor="#fff"
            keyboardType="email-address"
            // onSubmitEditing={() => this.password.focus()}
            onChangeText={text => this.updateValue(text, "itemHostname")}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Item type"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            // ref={input => (this.password = input)}
            onChangeText={text => this.updateValue(text, "itemStatus")}
          />

          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Item Description"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            // ref={input => (this.password = input)}

            onChangeText={text => this.updateValue(text, "itemDescription")}
          />

          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Item Date Receive"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            onChangeText={text => this.updateValue(text, "itemDateReceive")}
            // ref={input => (this.password = input)}
          />

          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Item status"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            onChangeText={text => this.updateValue(text, "itemStatus")}
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
