// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   View,
//   StatusBar,
//   TouchableOpacity,
//   Text 
// } from 'react-native';


// import Routes from './src/Routes';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar
//            backgroundColor="#1c313a"
//            barStyle="light-content"
//          />
//         <Routes/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container : {
//     flex: 1,
//   }
// });
// //This is an example code for NavigationDrawer//

import React, { Component } from "react";
//import react in our code.
import { View, Image, TouchableOpacity } from "react-native";
// import all basic components

//For React Navigation 2.+ import following
//import {DrawerNavigator, StackNavigator} from 'react-navigation';

//For React Navigation 3.+ import following
import {
  createSwitchNavigator,
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Login from "app/src/pages/Login";
import Screen1 from "app/src/pages/Screen1";
import Screen2 from "app/src/pages/Screen2";
import Screen3 from "app/src/pages/Screen3";
import Request from "app/src/pages/Request";
import EstateInsert from "app/src/pages/EstateInsert";
import DeliveryItem from "app/src/pages/DeliveryItem";
import Survey from "app/src/pages/Survey";
import MarketPlace from "app/src/pages/MarketPlace";
import Estate from "app/src/pages/Estates";
import Events from "app/src/pages/Events"
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require("app/src/images/drawer.png")}
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
    screen: Request,
    navigationOptions: ({ navigation }) => ({
      title: "Request",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});


//For React Navigation 3.+
const EstateInsert_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  fourth: {
    screen: EstateInsert,
    navigationOptions: ({ navigation }) => ({
      title: "Estate Insert",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});
//For React Navigation 3.+
const DeliveryItem_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  DeliveryItem: {
    screen: DeliveryItem,
    navigationOptions: ({ navigation }) => ({
      title: "Delivery items",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});
//For React Navigation 3.+
const Survey_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Survey: {
    screen: Survey,
    navigationOptions: ({ navigation }) => ({
      title: "Survey",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});
//For React Navigation 3.+
const MarketPlace_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  MarketPlace: {
    screen: MarketPlace,
    navigationOptions: ({ navigation }) => ({
      title: "Market Place",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});
//For React Navigation 3.+
const Estate_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Estate: {
    screen: Estate,
    navigationOptions: ({ navigation }) => ({
      title: "Estate Insert",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});


const Events_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Estate: {
    screen: Events,
    navigationOptions: ({ navigation }) => ({
      title: "Events",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
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
      drawerLabel: "Request"
    }
  },

  
  EstateInsert: {
    //Title
    screen: EstateInsert_StackNavigator,
    navigationOptions: {
      drawerLabel: "EstateInsert"
    }
  },
  DeliveryItem: {
    //Title
    screen: DeliveryItem_StackNavigator,
    navigationOptions: {
      drawerLabel: "Deliver Item"
    }
  },
  Survey: {
    //Title
    screen: Survey_StackNavigator,
    navigationOptions: {
      drawerLabel: "Survey"
    }
  },

  MarketPlace: {
    //Title
    screen: MarketPlace_StackNavigator,
    navigationOptions: {
      drawerLabel: "MarketPlace"
    }
  },

  Estate: {
    //Title
    screen: Estate_StackNavigator,
    navigationOptions: {
      drawerLabel: "Estate"
    }
  },

  Events: {
    //Title
    screen: Events_StackNavigator,
    navigationOptions: {
      drawerLabel: "Events"
    }
  }
});

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AuthStack = createStackNavigator({ SignIn: Login }, { headerMode: 'none' });

export default createAppContainer(createSwitchNavigator(
  {
    App:DrawerNavigatorExample,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
));
//For React Navigation 2.+ need to export App only
//export default DrawerNavigatorExample;
//For React Navigation 3.+
//export default createAppContainer(DrawerNavigatorExample);
