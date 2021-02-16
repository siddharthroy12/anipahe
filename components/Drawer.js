import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import {
    DrawerItemList,
  } from '@react-navigation/drawer';

export default function Drawer(props) {
    return (
        <ScrollView style={styles.drawer}>
            <View style={styles.drawerHeader}>
                <Text style={styles.headerText}>ani</Text>
                <Text style={{...styles.headerText, color: '#D5015B'}}>pahe</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => props.navigation.navigate('Home')}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => props.navigation.navigate('Search Anime')}>Search Anime</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={() => props.navigation.navigate('Index')}>Index</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    drawer: {
        backgroundColor: 'black'
    },
    drawerHeader: {
        flexDirection: 'row',
        backgroundColor: '#171717',
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        zIndex: 2
    },
    headerText: {
        color: 'white',
        fontSize: 30
    },
    button: {
        backgroundColor: '#272727',
        padding: 10,
        zIndex: -1
    },
    buttonText: {
        fontSize: 16,
        color: 'white'
    }
})