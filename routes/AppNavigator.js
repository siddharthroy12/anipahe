import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen'
import DrawerContent from '../components/Drawer'
import SearchNavigator from './SearchNavigator'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="SearchNavigator" component={SearchNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}