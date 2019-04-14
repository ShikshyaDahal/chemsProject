import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import RequestForm from '../components/RequestForm';

import {Actions} from 'react-native-router-flux';

export default class Request extends Component {

	
	render() {
		return(
            <View style={styles.container}>
				<RequestForm/>
                </View>			
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  }
  });
