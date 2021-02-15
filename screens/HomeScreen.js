import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../components/Header'
import EpisodeCard from '../components/EpisodeCard'
import globalStyle from '../styles/globalStyle'
import axios from 'axios'

export default function HomeScreen() {
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [list, setList] = useState([])

    useEffect(() => {
        setLoading(true)
        axios.get(`https://animepahe.com/api?m=airing&l=12&page=${page}`)
        .then(res => {
            setList(res.data.data)
            //console.log(res.data.data)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, [page])
    return (
        <View style={globalStyle.container}>
            <Header/>
            <View style={globalStyle.content}>
                {loading ? (
                    <Text style={{...styles.text, ...styles.title}}>Loading</Text>
                ):(
                    <View style={{flex:1}}>
                        <Text style={{...styles.text, ...styles.title}}>Latest Releases</Text>
                        <ScrollView style={styles.episodeList}>
                        {
                                list.map(item => (
                                    <EpisodeCard
                                        key={item.id}
                                        fansub={item.fansub}
                                        title={item.anime_title}
                                        episode={item.episode}
                                        snapshot={item.snapshot}
                                    />
                                ))
                        }
                        <Text style={{color: 'white'}}>helo</Text>
                        </ScrollView>
                    </View>
                )}
            </View>
            <StatusBar style='light'/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    },
    title: {
        fontSize: 25,
        marginBottom: 10,
    },
    episodeList: {
        flex: 1
    }
})