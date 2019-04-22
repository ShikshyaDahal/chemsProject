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
import Request from "app/src/pages/Request";
import DeliveryItem from "app/src/pages/DeliveryItem";
import Survey from "app/src/pages/Survey";
import MarketPlace from "app/src/pages/MarketPlace";
import Estates from "app/src/pages/Estates";
import Events from "app/src/pages/Events";
import EstateTypeList from "app/src/pages/EstateTypeList";
import EstateType from "app/src/pages/EstateType";
import EstateTypeUpdate from "app/src/pages/EstateTypeUpdate";
import Signup from "app/src/pages/Signup";
import Dashboard from "app/src/pages/Dashboard";
import PersonalMessageList from "app/src/pages/PersonalMessageList";
import PersonalMessage from "app/src/pages/PersonalMessage";
<<<<<<< HEAD
import AnnouncementList from "app/src/pages/AnnouncementList";
import Announcement from "app/src/pages/Announcement";
import EstatePlanTypes from "app/src/pages/EstatePlanTypes";
import Role from "app/src/pages/Role";
import RoleList from "app/src/pages/RoleList";
import UserGroup from "app/src/pages/UserGroup";
import EstatePlanTypeList from "app/src/pages/EstatePlanTypeList"
=======

import AnnouncementList from "app/src/pages/AnnouncementList";
import Announcement from "app/src/pages/Announcement"
>>>>>>> 4b931ed10eaa806b4ffb6373f99b35ff764e3d93
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
const Role_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Role: {
    screen: Role,
    navigationOptions: ({ navigation }) => ({
      title: "Role",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});


//For React Navigation 3.+
const RoleList_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  RoleList: {
    screen: RoleList,
    navigationOptions: ({ navigation }) => ({
      title: "RoleList",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});


//For React Navigation 3.+
const UserGroup_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  UserGroup: {
    screen: UserGroup,
    navigationOptions: ({ navigation }) => ({
      title: "User Group",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});


//For React Navigation 3.+
const EstateTypeList_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  fourth: {
    screen: EstateTypeList,
    navigationOptions: ({ navigation }) => ({
      title: "Estate List",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});


//For React Navigation 3.+
const EstatePlanTypeList_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  EstatePlanTypeList: {
    screen: EstatePlanTypeList,
    navigationOptions: ({ navigation }) => ({
      title: "Estate Plan Type List",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});


//For React Navigation 3.+
<<<<<<< HEAD
const PersonalMessageList_StackNavigator = createStackNavigator({
=======
const personalMessageList_StackNavigator = createStackNavigator({
>>>>>>> 4b931ed10eaa806b4ffb6373f99b35ff764e3d93
  //All the screen from the Screen2 will be indexed here
  PersonalMessageList: {
    screen: PersonalMessageList,
    navigationOptions: ({ navigation }) => ({
      title: "Messages",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});
const AnnouncementList_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  AnnouncementList: {
    screen: AnnouncementList,
    navigationOptions: ({ navigation }) => ({
      title: "Announcement List",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});


//For React Navigation 3.+
const PersonalMessage_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  PersonalMessage: {
    screen: PersonalMessage,
    navigationOptions: ({ navigation }) => ({
      title: "Messages",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
<<<<<<< HEAD

      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});
//For React Navigation 3.+
const EstatePlanTypes_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  EstatePlanTypes: {
    screen: EstatePlanTypes,
    navigationOptions: ({ navigation }) => ({
      title: "Estate Plan Types",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});

=======
>>>>>>> 4b931ed10eaa806b4ffb6373f99b35ff764e3d93

      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});
//For React Navigation 3.+
const Announcement_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Announcement: {
    screen: Announcement,
    navigationOptions: ({ navigation }) => ({
      title: "Create Announcement",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});

//For React Navigation 3.+
const EstateType_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  fifth: {
    screen: EstateType,
    navigationOptions: ({ navigation }) => ({
      title: "Create Estate",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});

//For React Navigation 3.+
const Dashboard_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({ navigation }) => ({
      title: "Dashboard",
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: "#4A4C4F"
      },
      headerTintColor: "#fff"
    })
  }
});

//For React Navigation 3.+
const EstateTypeUpdate_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  EstateTypeUpdate: {
    screen: EstateTypeUpdate,
    navigationOptions: ({ navigation }) => ({
      title: "Update Estate",
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
const Estates_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Estates: {
    screen: Estates,
    navigationOptions: ({ navigation }) => ({
      title: "Estate ",
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
  Events: {
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


const Signup_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Signup: {
    screen: Signup,
  }
});

//For React Navigation 2.+ need to use DrawerNavigator instead createDrawerNavigator
//const DrawerNavigatorExample = DrawerNavigator({

//For React Navigation 3.+
const DrawerNavigatorExample = createDrawerNavigator({


  //Drawer Optons and indexing

  Dashboard: {
    //Title
    screen: Dashboard_StackNavigator,
    navigationOptions: {
      drawerLabel: "Dashboard"
    }
  },RoleList: {
    //Title
    screen:RoleList_StackNavigator    ,
    navigationOptions: {
      drawerLabel: "Role List"
    }
  }, Role: {
    //Title
    screen:Role_StackNavigator    ,
    navigationOptions: {
      drawerLabel: () => null,
    }
  },

  UserGroup: {
    //Title
    screen:UserGroup_StackNavigator    ,
    navigationOptions: {
      drawerLabel: "User Group"
    }
  },
  
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: "Register Complaint"
    }
  },
  
  
  EstateTypeList: {
    //Title
    screen: EstateTypeList_StackNavigator,
    navigationOptions: {
      drawerLabel: "Estate Type"
    }
  },
  EstatePlanTypeList: {
    //Title
    screen: EstatePlanTypeList_StackNavigator,
    navigationOptions: {
      drawerLabel: "Estate Type Plan"
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

  Estates: {
    //Title
    screen: Estates_StackNavigator,
    navigationOptions: {
      drawerLabel: "Estate"
    }
  },
  EstatePlanTypes: {
    //Title
    screen: EstatePlanTypes_StackNavigator,
    navigationOptions: {
      drawerLabel: () => null,
    }
  },
  Events: {
    //Title
    screen: Events_StackNavigator,
    navigationOptions: {
      drawerLabel: "Events"
    }
  },
  PersonalMessageList: {
    //Title
    screen: PersonalMessageList_StackNavigator,
    navigationOptions: {
      drawerLabel: "Messages"
    }
  },
  EstateType: {
    screen: EstateType_StackNavigator,
    navigationOptions: {
      drawerLabel: () => null,
     
    }
  }, EstateTypeUpdate: {
    screen: EstateTypeUpdate_StackNavigator,
    navigationOptions: {
      drawerLabel: () => null,
     
    }
  },Signup: {
    screen: Signup_StackNavigator,
    navigationOptions: {
      drawerLabel: () => null,
      headerMode: 'none',
      navigationOptions: {
          headerVisible: false,
      }
    }
  }, PersonalMessage: {
    screen: PersonalMessage_StackNavigator,
    navigationOptions: {
      drawerLabel: () => null,
<<<<<<< HEAD
  }
},AnnouncementList: {
    //Title
    screen: AnnouncementList_StackNavigator,
    navigationOptions: {
      drawerLabel: "Announcement List"
    }
  }, Announcement: {
    screen: Announcement_StackNavigator,
    navigationOptions: {
      drawerLabel: () => null,
=======
>>>>>>> 4b931ed10eaa806b4ffb6373f99b35ff764e3d93
     
    }
  }
});



const AuthStack = createStackNavigator({ SignIn: Login }, { headerMode: 'none' });
const SignupStack = createStackNavigator({ SignUp: Signup }, { headerMode: 'none' });

export default createAppContainer(createSwitchNavigator(
  {
    App:DrawerNavigatorExample,
    Auth: AuthStack,
    SignupStack:SignupStack
   },
  {
    initialRouteName: 'Auth',
  }
));
//For React Navigation 2.+ need to export App only
//export default DrawerNavigatorExample;
//For React Navigation 3.+
//export default createAppContainer(DrawerNavigatorExample);