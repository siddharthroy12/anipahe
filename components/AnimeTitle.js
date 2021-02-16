import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function AnimeTitle({ image, title, type, episodes, status, season, year }) {
    return (
        <View style={styles.container}>
            <View style={styles.flexRow}>
                <View style={{alignItems:'center', justifyContent: 'center'}}>
                    <Image source={{uri:image}} style={styles.image}/>
                </View>
                <View style={styles.padding}>
                    <Text style={styles.title} numberOfLines={1} >{title}</Text>
                    <View style={styles.flexRow}>
                        <Text style={styles.type}>{type} </Text>
                        <Text style={styles.greyText}>- {episodes} Episode </Text>
                        <Text style={styles.greyText}>({status})</Text>
                    </View>
                    <View style={styles.flexRow}>
                        <Text style={styles.greyText}>{season} </Text>
                        <Text style={styles.greyText}>{year}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#272727',
        padding: 13,
        marginVertical: 1
    },
    title: {
        color: 'white',
        width: 215
    },
    type: {
        color: 'grey',
        fontWeight: 'bold'
    },
    greyText: {
        color: 'grey'
    },
    image: {
        height: 45,
        width: 45,
        borderRadius: 50
    },
    flexRow: {
        flexDirection: 'row'
    },
    padding: {
        paddingHorizontal: 15
    }
})
