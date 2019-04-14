import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import ReportForm from '../components/ReportForm';

export default class Report extends Component {

	
	render() {
		return(
            <View style={styles.container}>
				<ReportForm/>
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
