import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import EstateTypeListForm from '../components/EstateTypeListForm';

export default class EventTypeList extends Component {
    constructor(props) {
        super(props);
        this.estatetype = this.estatetype.bind(this);
      }
    
      estatetype() {
         console.log(this.props);
        this.props.navigation.navigate("EstateType");


        }
	
	render() {
		return(
            <View style={styles.container}>
				<EstateTypeListForm/>
                <View>
					<TouchableOpacity onPress={this.estatetype}><Text style={styles.signupButton}>Add Estate Type</Text></TouchableOpacity>
				</View>
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
  },signupButton: {
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
}
  });
