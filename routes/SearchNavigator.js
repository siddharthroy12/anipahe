import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen'
import AnimeScreen from '../screens/AnimeScreen'

const Stack = createStackNavigator()

export default function SearchNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="SearchScreen"
            headerMode="none">
                <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
            />
            <Stack.Screen name="AnimeScreen" component={AnimeScreen}/>
        </Stack.Navigator>
    )
}
