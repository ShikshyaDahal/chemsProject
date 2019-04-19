import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";

import EstatesForm from "../components/EstatesForm";

import { Actions } from "react-native-router-flux";

export default class Estates extends Component {
  // signup() {
  // 	Actions.signup()
  // }

  render() {
    return (
      <View style={styles.container}>
        <EstatesForm type="Insert Estate" />
      </View>
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
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 16
  },
  signupButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  }
});