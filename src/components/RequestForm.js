import React, { Component } from 'react';
import { Platform, StyleSheet, View, Button, Picker, Alert ,TextInput,Image} from "react-native";
import ImagePicker from 'react-native-image-picker';

import { FormLabel } from 'react-native-elements'
export default class RequestForm extends Component{
    constructor(){
        super();
        // this.state={
        //     language : ''
        // }
        // state = {
        //     photo: null,
        //   };
      }

      
    
      handleChoosePhoto = () => {
        const options = {
          noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            this.setState({ photo: response });
          }
        });
      };
        
	render(){
        const { photo } = this.state;

		return(
            <View style={styles.container}>

            {/* <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Room no"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.language.focus()}
              /> */}

           {/* <Picker  style={{ height: 100, width: 200 }}
             selectedValue={this.state.language}
             onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
            }>
            <Picker.Item label="Electricity" value="java" />
            <Picker.Item label="Water" value="js" />
            </Picker> */}

            {/* photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
        )} */}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />

      
            </View>
      
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
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  dropdownBox: {
    width:300
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});