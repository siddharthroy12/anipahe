import React from 'react'
import { View, Text, StyleSheet, Linking } from 'react-native'
import Header from '../components/Header'
import globalStyle from '../styles/globalStyle'

export default function AboutScreen() {
    return (
        <View style={globalStyle.container}>
            <Header title="About"/>
            <View style={{...globalStyle.content, ...styles.content}}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{...styles.title}}>ani</Text>
                    <Text style={{...styles.title, color: '#D5015B'}}>pahe</Text>
                </View>
                <Text style={{color: 'grey'}}>v1.0.0</Text>
                <Text style={styles.header}>Info</Text>
                <Text style={styles.p}>This is an unofficial client of 
                    <Text style={styles.link} onPress={() => Linking.openURL('https://animepahe.com')}> animepahe.com</Text>
                </Text>
                <Text style={styles.header}>Links</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.link} onPress={() => Linking.openURL('https://animepahe.com')}>Original Site</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/siddharthroy12/anipahe')}>Github</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL('https://twitter.com/Siddharth_Roy12')}>Twitter</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL('http://siddharthroy.pythonanywhere.com/')}>Author's Website</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    content: {
        alignItems: 'center',
        paddingTop: 40
    },
    title: {
        color: 'white',
        fontSize: 30
    },
    link: {
        color: 'dodgerblue',
        marginHorizontal: 5
    },
    header: {
        fontSize: 23,
        color: 'pink',
        marginVertical: 30
    },
    p: {
        color: 'white'
    }
})
