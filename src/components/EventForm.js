import React, { Component } from "react";
import {
    StyleSheet,
    DatePickerIOS,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback
} from "react-native";
import { CheckBox } from "react-native-elements";
import DatePicker from 'react-native-datepicker';


var DismissKeyboard = require("dismissKeyboard"); // Require React Native's utility library.

export default class MessageForm extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { chosenDate: new Date() };

    //     this.setDate = this.setDate.bind(this);
    // }

    constructor(props){
        super(props)
        this.state = {date:new Date()};
        
      }

    // setDate(newDate) {
    //     this.setState({ chosenDate: newDate });
    // }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholder="Location"
                        placeholderTextColor="#ffffff"
                        selectionColor="#fff"
                        keyboardType="email-address"
                        onSubmitEditing={() => this.location.focus()}
                    />
                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholder="Title"
                        secureTextEntry={true}
                        placeholderTextColor="#ffffff"
                        ref={(input) => this.title = input}
                    />

                    <TextInput
                        style={styles.inputBox}
                        underlineColorAndroid="rgba(0,0,0,0)"
                        placeholder="Details"
                        secureTextEntry={true}
                        placeholderTextColor="#ffffff"
                        ref={(input) => this.details = input}
                    />

                    <DatePicker
                        style={{ width: 200 }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                        }}
                        onDateChange={(date) => { this.setState({ date: date }) }}
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Register event</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    inputBox: {
        width: 300,
        height: 40,
        backgroundColor: "rgba(255, 255,255,0.2)",
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#ffffff",
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: "#1c313a",
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "500",
        color: "#ffffff",
        textAlign: "center"
    }
});
