 import React, { Component } from "react";
 import {
   StyleSheet,
   Text,
   View,
   StatusBar,
   TouchableOpacity,
   FlatList
 } from "react-native";



 export default class Dashboard extends Component {
   render() {
     return (
       <View style={styles.container}>
         <FlatList
           style={styles.list}
           data={[
             { key: "Devin" },
             { key: "Jackson" },
             { key: "James" },
             { key: "Joel" },
             { key: "John" },
            { key: "Jillian" },
             { key: "Jimmy" },
             { key: "Julie" }
           ]}
           renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
         />
        
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     backgroundColor: "#455a64",
     flex: 1,
     alignItems: "center",
     justifyContent: "center"
   },
   list: {
     width: 300,
     backgroundColor: "rgba(255, 255,255,0.2)",
     borderRadius: 25,
     paddingHorizontal: 16,
     fontSize: 16,
     color: "#ffffff",
     marginVertical: 10
   },
   buttonText: {
     fontSize: 16,
     fontWeight: "500",
     color: "#ffffff",
     textAlign: "center"
   }
 });