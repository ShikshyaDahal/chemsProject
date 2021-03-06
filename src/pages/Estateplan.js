// import React, { Component } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar,
//   TouchableOpacity
// } from "react-native";

// import EstateTypeForm from "../components/EstateTypeForm";

// import { Actions } from "react-native-router-flux";

// export default class EstateType extends Component {
//   // signup() {
//   // 	Actions.signup()
//   // }


//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <EstateTypeForm/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#455a64",
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   signupTextCont: {
//     flexGrow: 1,
//     alignItems: "flex-end",
//     justifyContent: "center",
//     paddingVertical: 16,
//     flexDirection: "row"
//   },
//   signupText: {
//     color: "rgba(255,255,255,0.6)",
//     fontSize: 16
//   },
//   signupButton: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "500"
//   }
// });

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

export default class EstatePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: ""
    };
    this.submit = this.submit.bind(this);
    this.estatePlannav = this.estatePlannav.bind(this);

  }

  estatePlannav() {

    console.log('here');
    console.log(this.props);

    this.props.navigation.navigate("EstatePlanList");
   }

    

  updateValue(text, field) {
    this.setState({ [field]: text });
  }

  submit() {

    console.log(this.props);

    let collection = {};
    var url = "http://192.168.42.171:8080/WebAPI/api/estatePlans";

    

    return fetch(url, {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        estatePlanType: this.state.estatePlanType,
        createBy:"string",        estateName: this.state.estateName,    parentId: this.state.parentId,  estatePlanName:this.state.estatePlanName

      }),
    
    }).then((response) => response.json())
    .then((responseJson) => {
      Alert.alert(
        [
          {text: 'OK', onPress: () => this.estatePlannav()},
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
            placeholder="estatePlanDescription"
            placeholderTextColor="#ffffff"
            onChangeText={text => this.updateValue(text, "estatePlan")}

            // ref={input => (this.password = input)}
          />

          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="estateName"
            placeholderTextColor="#ffffff"
            onChangeText={text => this.updateValue(text, "estateName")}
            // ref={input => (this.password = input)}
          />
                      <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="parentId"
            placeholderTextColor="#ffffff"
            onChangeText={text => this.updateValue(text, "parentId")}
            // ref={input => (this.password = input)}
          />
                    <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="estatePlanType"
            placeholderTextColor="#ffffff"
            onChangeText={text => this.updateValue(text, "estatePlanType")}
            // ref={input => (this.password = input)}
          />
                    <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="estatePlanName"
            placeholderTextColor="#ffffff"
            onChangeText={text => this.updateValue(text, "estatePlanName")}
            // ref={input => (this.password = input)}
          />
          <TouchableOpacity style={styles.button} onPress={this.submit}>
            <Text style={styles.buttonText}>Insert EstatePlan</Text>
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
