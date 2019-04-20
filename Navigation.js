import {
    StackNavigator,
    DrawerNavigator,
    TabNavigator
}
    from 'react-navigation';
import Login from "app/src/pages/Login";
import Request from "app/src/pages/Request";
import DeliveryItem from "app/src/pages/DeliveryItem";
import React from 'react';
const Navigation = StackNavigator({
    First: {
        screen: Login,
    },
    Second: {
        screen: Request,
    },
});
export default Navigation;