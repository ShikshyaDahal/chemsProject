import React, { Component } from 'react';
import { Platform, StyleSheet, TouchableOpacity,View, Button, Picker, Alert ,TextInput,Image,Text} from "react-native";
import ImagePicker from 'react-native-image-picker';

import { FormLabel } from 'react-native-elements'


var options = {
  title: 'Select a photo',
 takePhotoButtonTitle:'Take a photo',
 chooseFromLibraryButtonTitle: 'Choose from gallery',
 quality:1
};

export default class RequestForm extends Component{
    constructor(){
        super();
        this.state={
          imageSource:null,
        }
        
      }
      selectphoto(){
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
        
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = { uri: response.uri };   
            this.setState({
              imageSource: source,
            });
          }
        });
      }

	render(){
       

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

            <Image  source={this.state.imageSource !=null ? this.state.imageSource :
           require('../images/not_available.png')}/>
            <TouchableOpacity style={styles.buttonText} onPress={this.selectphoto.bind(this)}>
              <Text style={styles.inputBox}>Select</Text>
            </TouchableOpacity>

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