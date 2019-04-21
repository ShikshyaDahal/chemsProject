<<<<<<< HEAD
=======
// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar ,
//   TouchableOpacity
// } from 'react-native';

// import EstateTypeListForm from '../components/EstateTypeListForm';

// export default class EventTypeList extends Component {
//     constructor(props) {
//         super(props);
//         this.estatetype = this.estatetype.bind(this);
//       }

//       estatetype() {
//          console.log(this.props);
//         this.props.navigation.navigate("EstateType");


//         }

// 	render() {
// 		return(
//             <View style={styles.container}>
// 				<EstateTypeListForm/>
//                 <View>
// 					<TouchableOpacity onPress={this.estatetype}><Text style={styles.signupButton}>Add Estate Type</Text></TouchableOpacity>
// 				</View>
//                 </View>			
// 			)
// 	}
// }

// const styles = StyleSheet.create({
//   container : {
//     backgroundColor:'#455a64',
//     flex: 1,
//     alignItems:'center',
//     justifyContent :'center'
//   },signupButton: {
//     color:'#ffffff',
//     fontSize:16,
//     fontWeight:'500'
// }
//   });

>>>>>>> d8257680b5f83157cc8746bf2769aa735d0b783c
import React from 'react';
import {
  StyleSheet,
  FlatList, ActivityIndicator, Text, View
} from 'react-native';
import { Button, TouchableOpacity,TouchableHighlight } from 'react-native-elements';

export default class EstateTypeList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: true };
    this.estatetype = this.estatetype.bind(this);
<<<<<<< HEAD
    this.estatetypelist = this.estatetypelist.bind(this);
  }

  estatetype() {
    console.log(this.props);
    this.props.navigation.navigate("EstateType");
  }

  estatetypelist() {
    console.log(this.props);
    this.props.navigation.navigate("EstateTypeList");
  }

  _onPressItem = (item) => { 
    console.log(item)
    item => item.estateTypeId;
    item => item.json();

    var url = "http://192.168.42.171:8080/WebAPI/api/estateTypes";
    return fetch(url, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        estateTypeId: item
      }),
    
    }).then((response) => response.json())
    .then((responseJson) => {
      Alert.alert(
        'Estate type',
        ' Data deleted',
        [
          {text: 'OK', onPress: () => this.estatetypelist()},
        ],
        { cancelable: false }
      )
      
    })
      .catch(error => {
        console.error(error);
      });
    
 };

 _onPressUpdate = (id) => { 
   console.log(id)
  this.props.navigation.navigate('EventTypeUpdate',{
      id: id // your user details
  })
};

  componentDidMount() {
    return fetch('http://192.168.42.171:8080/WebAPI/api/estateTypes/findAll', {
=======
    this.deleteEstateType = this.deleteEstateType.bind(this);
  }

  estatetype() {
    console.log(this.props);
    this.props.navigation.navigate("EstateType");
  }

  deleteEstateType() {

    console.log(this.props)
    return fetch('http://192.41.170.207:8080/WebAPI/api/estateTypes/findAll', {
      method: 'GET'
    })
  }

  componentDidMount() {
    return fetch('http://192.41.170.207:8080/WebAPI/api/estateTypes/findAll', {
>>>>>>> d8257680b5f83157cc8746bf2769aa735d0b783c
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {
<<<<<<< HEAD

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

=======

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {

        });

>>>>>>> d8257680b5f83157cc8746bf2769aa735d0b783c
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
          <Button  onPress={this.estatetype}
          title = "Add Estate Type">
          <Text style={styles.signupButton}>Add Estate Type</Text></Button>
        </View>
        <View>
          <FlatList
            data={this.state.dataSource}
            keyExtractor={({ id }, index) => id}
<<<<<<< HEAD
            renderItem={({ item }) => <View style={styles1.container}><View style={styles1.halfHeight}><Text >{item.estateTypeDescription}, {item.estateTypeName}
            </Text></View><View style={styles1.quarterHeight}>
              <Button 
              onPress={()=>{this._onPressItem(item)}}
=======
            renderItem={({ item }) => <View style={styles1.container}><View style={styles1.halfHeight}><Text >{item.estateTypeId},{item.estateTypeDescription}, {item.estateTypeName}
            </Text></View><View style={styles1.quarterHeight}>
              <Button 
              onPress={this.deleteEstateType}
>>>>>>> d8257680b5f83157cc8746bf2769aa735d0b783c
              title = "Delete"
              borderColor = 'black'
              backgroundColor = 'black'></Button >
              <Button  
              title = "Update"
<<<<<<< HEAD
              color = "black"
              onPress={()=>{this._onPressUpdate(item.estateTypeId)}}></Button>
=======
              colour="#841524"
              backgroundColor='#3fffff'
               onPress={this.update}></Button>
>>>>>>> d8257680b5f83157cc8746bf2769aa735d0b783c
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
<<<<<<< HEAD
=======
    backgroundColor:'#3fffff',
    
>>>>>>> d8257680b5f83157cc8746bf2769aa735d0b783c
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
<<<<<<< HEAD
});
=======
});
>>>>>>> d8257680b5f83157cc8746bf2769aa735d0b783c
