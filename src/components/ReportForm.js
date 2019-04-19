import React, { Component } from 'react';
import {
    StyleSheet,TextInput,
    View
  } from 'react-native';
   
  export default class ReportForm extends Component {
    render() {
      return (
        <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.box}>
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Room no"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.language.focus()}
              />
              </View>
              <View style={styles.box}>
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Room no"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.language.focus()}
              />
              
              
              </View>
              <View style={styles.box}>
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Room no"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.language.focus()}
              />
              </View>
            </View>
   
        </View>
      );
    }
  }
   
   
  const styles = StyleSheet.create({
    row: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      marginTop:120,
      
    },
    box: {
      flexGrow: 1,
      height: 100,
      marginRight: 20
    },
    inputBox: {
        width:100,
        backgroundColor:'rgba(255, 255,255,0.2)',
        borderRadius: 25,
        paddingHorizontal:16,
        fontSize:16,
        color:'#ffffff',
        marginVertical: 10
      }
  });