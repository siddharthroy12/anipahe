import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Header from '../components/Header'
import JSSoup from 'jssoup'; 
import axios from 'axios'
import globalStyle from '../styles/globalStyle'

export default function AnimeScreen({ route, navigation }) {
    const [title, setTitle] = useState('')
    const [japTitle, setJapTitle] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(true)
    const [desc, setDesc] = useState('')
    
    useEffect(() => {
        setLoading(true)
        axios.get(`https://animepahe.com/anime/${route.params.session}`)
        .then(res => {
            
            let soup = new JSSoup(res.data)
            let titleWrapper = soup.find('div', 'title-wrapper')
            let engTitle = titleWrapper.find('h1')
            let posterWrapper = soup.find('div', 'poster-wrapper')
            let img = posterWrapper.find('img')
            let japTitle = titleWrapper.find('h2', 'japanese')
            let desc = soup.find('div', 'anime-synopsis')
            setImage(img.attrs.src)
            setTitle(engTitle.text)
            setJapTitle(japTitle.text)
            setDesc(desc.text)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <View style={globalStyle.container}>
            <Header title="Anime"/>
            <View style={globalStyle.content}>
                {loading ? (
                    <Text style={styles.title}>Loading</Text>
                ): (
                    <ScrollView style={styles.content}>
                        <View style={styles.banner}>
                            <Image source={{uri: image}} style={styles.poster}/>
                            <Text style={styles.title} numberOfLines={1}>{title}</Text>
                            <Text style={styles.japTitle}>{japTitle}</Text>
                        </View>
                        <View>
                            <Text style={styles.heading}>Synopsis</Text>
                        </View>
                        <Text style={styles.desc}>{desc}</Text>
                    </ScrollView>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        color: 'white',
        width: 220,
        textAlign: 'center',
        fontSize: 20
    },
    japTitle: {
        color: 'grey',
        width: 220,
        textAlign: 'center',
        fontSize: 15
    },
    poster: {
        width: 180,
        height: 240
    },
    banner: {
        alignItems: 'center'
    },
    content: {
        paddingTop: 40,
        flex: 1
    },
    heading: {
        color: 'pink',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 30
    },
    desc: {
        marginTop: 10,
        color : 'white',
        padding: 13,
        textAlign: 'center'
    }
})