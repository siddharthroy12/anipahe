import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import WebViewScreen from '../screens/WebViewScreen'

const Stack = createStackNavigator()

export default function HomeNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="HomeScreen"
            headerMode="none">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <Stack.Screen 
                name="WebViewScreen"
                component={WebViewScreen}
            />
        </Stack.Navigator>
    )
}
