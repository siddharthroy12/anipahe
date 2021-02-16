import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import AnimeListScreen from '../screens/AnimeListScreen'
import DrawerContent from '../components/Drawer'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Search Anime" component={SearchScreen} />
        <Drawer.Screen name="Index" component={AnimeListScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}