//This is an example code for NavigationDrawer//
<<<<<<< HEAD
import React, { Component } from 'react';
//import react in our code.
import { View, Image, TouchableOpacity } from 'react-native';
=======
import React, { Component } from "react";
//import react in our code.
import { View, Image, TouchableOpacity } from "react-native";
>>>>>>> origin/master
// import all basic components

//For React Navigation 2.+ import following
//import {DrawerNavigator, StackNavigator} from 'react-navigation';

//For React Navigation 3.+ import following
import {
  createDrawerNavigator,
  createStackNavigator,
<<<<<<< HEAD
  createAppContainer,
} from 'react-navigation';

import Screen1 from 'app/src/pages/Screen1';
import Screen2 from 'app/src/pages/Screen2';
import Screen3 from 'app/src/pages/Screen3';
=======
  createAppContainer
} from "react-navigation";

import Screen1 from "app/src/pages/Screen1";
import Screen2 from "app/src/pages/Screen2";
import Screen3 from "app/src/pages/Screen3";
import EstateInsert from "app/src/EstateInsert";
>>>>>>> origin/master

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
<<<<<<< HEAD
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('app/src/images/drawer.png')}
=======
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require("app/src/images/drawer.png")}
>>>>>>> origin/master
            style={{ width: 25, height: 25, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({

//For React Navigation 3.+
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
<<<<<<< HEAD
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
=======
      title: "Demo Screen 1",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
>>>>>>> origin/master
});

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({

//For React Navigation 3.+
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
<<<<<<< HEAD
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
=======
      title: "Demo Screen 2",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
>>>>>>> origin/master
});

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({

//For React Navigation 3.+
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
<<<<<<< HEAD
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FF9800',
      },
      headerTintColor: '#fff',
    }),
  },
=======
      title: "Demo Screen 3",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
});
//For React Navigation 3.+
const EstateInsert_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  EstateInsert: {
    screen: EstateInsert,
    navigationOptions: ({ navigation }) => ({
      title: "Estate Insert",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#FF9800"
      },
      headerTintColor: "#fff"
    })
  }
>>>>>>> origin/master
});

//For React Navigation 2.+ need to use DrawerNavigator instead createDrawerNavigator
//const DrawerNavigatorExample = DrawerNavigator({

//For React Navigation 3.+
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
<<<<<<< HEAD
      drawerLabel: 'Demo Screen 1',
    },
=======
      drawerLabel: "Demo Screen 1"
    }
>>>>>>> origin/master
  },

  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
<<<<<<< HEAD
      drawerLabel: 'Demo Screen 2',
    },
=======
      drawerLabel: "Demo Screen 2"
    }
>>>>>>> origin/master
  },

  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
<<<<<<< HEAD
      drawerLabel: 'Demo Screen 3',
    },
  },
=======
      drawerLabel: "Demo Screen 3"
    }
  }
>>>>>>> origin/master
});

//For React Navigation 2.+ need to export App only
//export default DrawerNavigatorExample;
//For React Navigation 3.+
<<<<<<< HEAD
export default createAppContainer(DrawerNavigatorExample);
=======
export default createAppContainer(DrawerNavigatorExample);
>>>>>>> origin/master
