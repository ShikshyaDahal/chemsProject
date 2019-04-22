import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback, Alert
} from "react-native";
import { CheckBox } from "react-native-elements";

import { ImagePicker, Permissions, Constants } from 'expo';

var DismissKeyboard = require("dismissKeyboard"); // Require React Native's utility library.

export default class MarketPlace extends Component {
  state = {
    checked: false
  };

  askPermissionsAsync = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    // you would probably do something to verify that permissions
    // are actually granted, but I'm skipping that for brevity
  }

  useLibraryHandler = async () => {
    await this.askPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      base64: false,
    });
    this.setState({ result });
    Alert.alert(
      'Market place',
      'Picture inserted',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>

          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Status"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
          // ref={input => (this.password = input)}
          />

          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Price"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
          // ref={input => (this.password = input)}
          />

          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Productname"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
          // ref={input => (this.password = input)}
          />

          <TouchableOpacity onPress={this.useLibraryHandler} style={styles.imageButton}>
            <Text style={styles.imageText}>Load photo from gallery</Text>
          </TouchableOpacity>



          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Insert Market place</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#455a64",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  signupTextCont: {
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
  }, imageButton: {

    width: 200,
    backgroundColor: "#D9E0DD",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }, imageText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000a07",
    textAlign: "center"
  }


});
