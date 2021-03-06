import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import SignupForm from '../components/SignupForm';


export default class Signup extends Component {

  constructor(props) {
    super(props);

    this.login = this.login.bind(this);

  }

	login() {
     console.log(this.props);
    this.props.navigation.navigate("Auth")
  }
	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<SignupForm type="Signup"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
                <TouchableOpacity onPress={this.login}><Text style={styles.signupButton}> Login</Text></TouchableOpacity>
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
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});
