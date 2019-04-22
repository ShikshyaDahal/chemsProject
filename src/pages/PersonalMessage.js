import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,Alert
} from "react-native";

var DismissKeyboard = require("dismissKeyboard"); // Require React Native's utility library.

export default class PersonalMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: ""
    };
    this.submit = this.submit.bind(this);
    this.personalMessagenav = this.personalMessagenav.bind(this);

  }

  personalMessagenav() {
    this.props.navigation.navigate("PersonalMessageList");
   }

    

  updateValue(text, field) {
    this.setState({ [field]: text });
  }

  submit() {

    console.log(this.props);

    let collection = {};
    var url = "http://192.168.42.171:8080/WebAPI/api/personalMessages";

    

    return fetch(url, {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: this.state.message,
        reciverId: this.state.receiverId,
        createBy:"string",
      }),
    
    }).then((response) => response.json())
    .then((responseJson) => {
      Alert.alert(
        '',
        'Message sent',
        [
          {text: 'OK', onPress: () => this.personalMessagenav()},
        ],
        { cancelable: false }
      )
      
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
            placeholder="Receiver name"
            placeholderTextColor="#ffffff"
            onChangeText={text => this.updateValue(text, "message")}

            // ref={input => (this.password = input)}
          />

          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Message"
            placeholderTextColor="#ffffff"
            onChangeText={text => this.updateValue(text, "receiverid")}
            // ref={input => (this.password = input)}
          />

          <TouchableOpacity style={styles.button} onPress={this.submit}>
            <Text style={styles.buttonText}>Send Message</Text>
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
