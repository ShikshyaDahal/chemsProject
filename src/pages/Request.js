import React, { Component } from 'react';
import { Button, Text, ScrollView, StyleSheet } from 'react-native';
// import ImagePicker from 'react-native-image-picker';

import { ImagePicker, Permissions, Constants } from 'expo';


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
    
      state = {
        result: null,
      };

      
      useLibraryHandler = async () => {
        await this.askPermissionsAsync();
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
          base64: false,
        });
        this.setState({ result });
      };
    
      useCameraHandler = async () => {
        await this.askPermissionsAsync();
        let result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [4, 3],
          base64: false,
        });
        this.setState({ result });
      };

      askPermissionsAsync = async () => {
        await Permissions.askAsync(Permissions.CAMERA);
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
        // you would probably do something to verify that permissions
        // are actually granted, but I'm skipping that for brevity
      };

	render(){
       

		return(

      <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
      <Button title="launchCameraAsync" onPress={this.useCameraHandler} />
      <Button
        title="launchImageLibraryAsync"
        onPress={this.useLibraryHandler}
      />
      <Text style={styles.paragraph}>
        {JSON.stringify(this.state.result)}
      </Text>
    </ScrollView>
      
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
