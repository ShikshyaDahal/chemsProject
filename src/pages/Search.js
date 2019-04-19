import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList
} from "react-native";

import ProfileForm from "../components/ProfileForm";

import { Actions } from "react-native-router-flux";

export default class Profile extends Component {
  // signup() {
  // 	Actions.signup()
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textbox}>
          <Text>Reports</Text>
        </View>
        <View styles={styles.date}>
          <View styles={styles.dateContainer}>
            <Text>Date: </Text>
            <Text>To: </Text>
          </View>
        </View>
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
  list: {
    width: 300,
    backgroundColor: "rgba(255, 255,255,0.2)",
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#ffffff",
    marginVertical: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  },
  textbox: {
    alignItems: "center"
  },
  date: {
    flexDirection: "row"
  },
  dateContainer: {
    flex: 1
  }
});
