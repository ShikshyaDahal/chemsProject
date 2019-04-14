import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

var DismissKeyboard = require('dismissKeyboard'); // Require React Native's utility library.


export default class Form extends Component {


	render(){
		return(
			
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Email"
                placeholderTextColor = "#ffffff"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}
                />
            <TextInput style={styles.inputBox} 
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor = "#ffffff"
                ref={(input) => this.password = input}
                />  
             <TouchableOpacity onPress={this.signup} style={styles.button}>
               <Text style={styles.buttonText}>{this.props.type}</Text>
             </TouchableOpacity>    
            </View>
           </TouchableWithoutFeedback>
  		
			)
	}

  constructor() {

    super();
    this.state = {
      email: '',
      password: ''
    }
  }
  updateValue(text, field) {
    // if(field=='email'){
    //   this.setState({
    //     email:text,
    //   })
    // }
    // else if(field=='password'){
    //   this.setState({
    //     password:text,
    //   })
    // }
    this.setState({ [field]: text });
  }
  submit() {
    let collection = {}
    collection.email = this.state.email,
      collection.password = this.state.password
    console.warn(collection)

    var url = 'http://silptech.com.np/phpscripts/loginRoutine.php';

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(collection),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json())
    .then((responseJson) => {
      console.warn(responseJson)
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });


  }
  

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    height: 40,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }

});