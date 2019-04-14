import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity ,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

var DismissKeyboard = require('dismissKeyboard'); // Require React Native's utility library.


export default class Form extends Component{

  constructor(){

    super();
    this.state={
      email:'',
      password:''
    }
  }
  updateValue(text,field){
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
    this.setState({[field]:text});
  }
  submit(){
    let collection={}
    collection.email=this.state.email,
    collection.password=this.state.password
    console.warn(collection)

//     var url = 'api';

// fetch(url, {
//   method: 'POST',
//   body: JSON.stringify(collection), 
//   headers:{
//     'Content-Type': 'application/json'
//   }
// }).then(res => res.json())
// .then(response => console.log('Success:', JSON.stringify(response)))
// .catch(error => console.error('Error:', error));
  }
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
              onChangeText={(text) => this.updateValue(text,'email')}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              onChangeText={(text) => this.updateValue(text,'password')}

              />  
           <TouchableOpacity style={styles.button} onPress={()=>this.submit()}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
      </TouchableWithoutFeedback>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    height:40,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});