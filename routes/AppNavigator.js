import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator'
import DrawerContent from '../components/Drawer'
import SearchNavigator from './SearchNavigator'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeNavigator" drawerContent={(props) => <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeNavigator" component={HomeNavigator} />
        <Drawer.Screen name="SearchNavigator" component={SearchNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}