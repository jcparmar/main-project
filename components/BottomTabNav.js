import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import FeedBack from '../screens/FeedbackScreen';

export default class BottomTabNav extends React.Component {
 render(){
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} >
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="FeedBack" component={FeedBack} />
    </Tab.Navigator>
  );}
};


