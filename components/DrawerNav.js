import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNav from './BottomTabNav';
import SellerScreen from '../screens/SellerScreen';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {
 render(){
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNav} />
      <Drawer.Screen name="SellerScreen" component={SellerScreen} />
 
    </Drawer.Navigator>
    </NavigationContainer>
  );}
};

