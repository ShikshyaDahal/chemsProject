import React from 'react';
import {   StyleSheet,
  FlatList, ActivityIndicator, Text, View  } from 'react-native';
import { Button,TouchableOpacity } from 'react-native-elements';

export default class EstateTypeListForm extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
    this.deleteEstateType = this.deleteEstateType.bind(this);
  }


  deleteEstateType(){

    console.log(this.props)
    return fetch('http://192.41.170.207:8080/WebAPI/api/estateTypes/findAll',{
        method:'GET'
    })
  }

  componentDidMount(){
    return fetch('http://192.41.170.207:8080/WebAPI/api/estateTypes/findAll',{
        method:'GET'
    })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => <View><Text>{item.estateTypeDescription}, {item.estateTypeName}</Text><View>
            <Button onPress={this.deleteEstateType}></Button ><Button onPress={this.deleteEstateType}></Button></View></View>}
        />
      </View>
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
