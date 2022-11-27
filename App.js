import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import DrawerNavigator from './components/DrawerNav';


import Profile from './screens/Profile';
import Seller from './screens/SellerScreen';
import BottomTabNav from './components/BottomTabNav';

export default function App() {
  return (
   
      <DrawerNavigator />
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
