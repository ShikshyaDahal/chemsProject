import React from 'react';
import {
  StyleSheet,
  FlatList, ActivityIndicator, Text, View
} from 'react-native';
import { Button, TouchableOpacity,TouchableHighlight } from 'react-native-elements';

export default class MarketPlaceList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.MarketPlace = this.MarketPlace.bind(this);
    }

    MarketPlace() {
    console.log(this.props);
    this.props.navigation.navigate("MarketPlace");
  }

  componentDidMount() {
    return fetch('http://192.41.170.207:8080/WebAPI/api/MarketPlaces/findAll', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }



  render() {

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <View >
        <View>
          <Button  onPress={this.MarketPlace}
          title = "Add MarketPlace">
          <Text style={styles.signupButton}>Add MarketPlace</Text></Button>
        </View>
        <View>
          <FlatList
            data={this.state.dataSource}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => <View style={styles1.container}><View style={styles1.halfHeight}><Text >{item.ProductName}{item.productPrice}</Text></View><View style={styles1.quarterHeight}>
               </View></View>
              }
          />
        </View>

      </View>
    );
  }
}
var styles1 = StyleSheet.create({
  container: {
    backgroundColor:'#3fffff',
    
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-between',
  },
  halfHeight: {
      flex: 1,
      
  },
  quarterHeight: {
      flex: 1,
        }
});
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
    height:10,
    width: 30,
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
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  },
  b1:{
    borderWidth: 1,
      padding: 25,
      borderColor: 'black',
      backgroundColor: 'red'
  },
  text: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'red'
 }
});
