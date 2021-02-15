import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function PageNav({ page, next, prev, end, start }) {
    return (
        <View style={styles.pageNav}>
            <TouchableOpacity style={styles.button} onPress={start}>
                <MaterialIcons name="skip-previous" color="#D5015B" size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={prev}>
                <MaterialIcons name="navigate-before" color="#D5015B" size={20}/>
            </TouchableOpacity>
            <View style={{...styles.button, backgroundColor: '#D5015B'}}>
                <Text style={{color : 'white'}}>{page}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={next}>
                <MaterialIcons name="navigate-next" color="#D5015B" size={20}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={end}>
                <MaterialIcons name="skip-next" color="#D5015B" size={20}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    pageNav: {
        backgroundColor: '#222222',
        height: 40,
        width: 200,
        margin: 20,
        flexDirection: 'row',
        borderRadius: 5
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'black'
    }
})
