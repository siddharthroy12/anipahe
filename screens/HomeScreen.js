import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../components/Header'
import EpisodeCard from '../components/EpisodeCard'
import globalStyle from '../styles/globalStyle'
import PageNav from '../components/PageNav'
import axios from 'axios'

export default function HomeScreen() {
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [list, setList] = useState([])
    const [lastPage, setLastPage] = useState(300)

    useEffect(() => {
        setLoading(true)
        const cancelTokenSource = axios.CancelToken.source();
        axios.get(`https://animepahe.com/api?m=airing&l=12&page=${page}`,{
            cancelToken: cancelTokenSource.token
        })
        .then(res => {
            setLastPage(res.data.last_page)
            setList(res.data.data)
            setLoading(false)
        })
        .catch(err => {})

        return () => {
            cancelTokenSource.cancel()
        }
    }, [page])

    const start = () => {
        if (page !== 1) {
            setPage(1)
        }   
    }

    const next = () => {
        if (page < lastPage) {
            setPage((page) => page + 1)
        }
    }

    const prev = () => {
        if (page > 1) {
            setPage((page) => page - 1)
        }
    }

    const end = () => {
        if (page !== lastPage) {
            setPage(lastPage)
        }
    }

    return (
        <View style={globalStyle.container}>
            <Header/>
            <View style={globalStyle.content}>
                {loading ? (
                    <Text style={{...styles.text, ...styles.title}}>Loading</Text>
                ):(
                    <View style={{flex:1}}>
                        <Text style={{...styles.text, ...styles.title}}>Latest Releases</Text>
                        <ScrollView style={styles.episodeList} contentContainerStyle={styles.scrollContainer}>
                        {
                            list.map(item => (
                                <EpisodeCard
                                    key={item.id}
                                    fansub={item.fansub}
                                    title={item.anime_title}
                                    episode={item.episode}
                                    snapshot={item.snapshot}
                                    animeId={item.anime_id}
                                    session={item.session}
                                />
                            ))
                        }
                        <PageNav start={start} next={next} page={page} prev={prev} end={end}/>
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
        flex: 1,
    },
    scrollContainer: {
        alignItems: 'center',
    }
})