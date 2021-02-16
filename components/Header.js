import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Header({ title=null }) {
    const navigation = useNavigation()
    return (
        <View style={styles.headerContainer}>
            <MaterialIcons name='menu' style={styles.menuIcon} onPress={() => navigation.toggleDrawer()} size={30}/>
            <View style={styles.header}>
                { title === null ? (
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.headerText}>ani</Text>
                        <Text style={{...styles.headerText, color: '#D5015B' }}>pahe</Text>
                    </View>
                ) : (
                    <Text style={{...styles.headerText, color: '#D5015B' }}>{title}</Text>
                )}
                
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