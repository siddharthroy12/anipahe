import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <MaterialIcons name='menu' style={styles.menuIcon} size={30}/>
            <View style={styles.header}>
                <Text style={styles.headerText}>Ani</Text>
                <Text style={{...styles.headerText, color: '#D5015B' }}>Pahe</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#171717',
        paddingTop: 20,
        elevation: 20,
        shadowColor: '#fff',
        shadowOffset: { height: 10, width: 0 },
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        padding: 15,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    menuIcon: {
        color: 'white',
        marginLeft: 2,
        position: 'absolute',
        left: 10,
        top: 35,
    }
})