import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import EventForm from '../components/EventForm';

export default class Events extends Component {

	
	render() {
		return(
            <View style={styles.container}>
				<EventForm/>
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
