import React from 'react'
import { Text, ImageBackground, StyleSheet } from 'react-native'

export default function EpisodeCard({ fansub ,title, snapshot, episode }) {
    const text = `[${fansub}] ${title}`
    return (
        <ImageBackground
            source={{
                uri: snapshot
            }}
            style={styles.imageBackground}
            imageStyle={styles.image}>
            <Text
                style={{...styles.text, left: 6}}
                numberOfLines={1}>
                {text}
            </Text>
            <Text
                style={{...styles.text, right: 6, width: 25 }}>
                { episode }
            </Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        width: '100%',
        height: 200,
        marginVertical: 5
    },
    image: {
        width: '100%',
        height: '100%'
    },
    text: {
        color: 'white',
        position: 'absolute',
        bottom: 5,
        fontSize: 13,
        flex: 1,
        width: 240
    }
})