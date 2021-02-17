import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Header from '../components/Header'
import PageNav from '../components/PageNav'
import EpisodeCard from '../components/EpisodeCard'
import JSSoup from 'jssoup'; 
import axios from 'axios'
import globalStyle from '../styles/globalStyle'

export default function AnimeScreen({ route, navigation }) {
    const [title, setTitle] = useState('')
    const [japTitle, setJapTitle] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(true)
    const [desc, setDesc] = useState('')
    const [details, setDetails] = useState([])
    const [episodes, setEpisodes] = useState([])
    const [episodesLoading, setEpisodesLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(300)

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
            let animeInfo = soup.find('div', 'anime-info')
            let infos = animeInfo.findAll('p')
            let texts = []
            infos.map(item => {
                texts.push(item.text)
            })
            let tmp = []
            texts.map(detail => {
                let i = detail.replace(/\s+/g, ' ').trim();
                tmp.push(i)
            })
            let infoss = []
            tmp.map(item => {
                let type = ""
                let i = 0
                while (item[i] !== ':') {
                    type += item[i]
                    i++
                }
                i++
                let text = ""
                while (i < item.length) {
                    text += item[i]
                    i++
                }
                infoss.push({
                    type,
                    text
                })
            })
            setDetails(infoss)
            setImage(img.attrs.src)
            setTitle(engTitle.text)
            setJapTitle(japTitle.text)
            setDesc(desc.text)
            setLoading(false)
        })
        .catch(err => console.log(err))
    }, [])


    useEffect(() => {
        setEpisodesLoading(true)
        axios.get(`https://animepahe.com/api?m=release&id=${route.params.id}&l=30&sort=episode_desc&page=${page}`)
        .then(res => {
            setEpisodes(res.data.data)
            setPages(res.data.last_page)
            setEpisodesLoading(false)
        })
        .catch(err => console.log(err))
    },[page])

    const start = () => {
        if (page !== 1) {
            setPage(1)
        }   
    }

    const next = () => {
        if (page < pages) {
            setPage((page) => page + 1)
        }
    }

    const prev = () => {
        if (page > 1) {
            setPage((page) => page - 1)
        }
    }

    const end = () => {
        if (page !== pages) {
            setPage(pages)
        }
    }

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
                        <Text style={styles.heading}>Details</Text>
                        {details.map(item => (
                            <View style={styles.detail} key={item.type}>
                                <Text style={{color: '#D5015B'}}>{item.type}:</Text>
                                <Text style={{color: 'grey', paddingLeft: 10}}>{item.text}</Text>
                            </View>
                        ))}
                        <Text style={styles.heading}>Episodes</Text>
                        {episodes.map(episode => (
                            <EpisodeCard
                                key={episode.id}
                                episode={episode.episode}
                                snapshot={episode.snapshot}
                                duration={episode.duration}
                                animeId={episode.anime_id}
                                session={episode.session}
                            />
                        ))}
                        <View style={{alignItems:'center'}}>
                            <PageNav start={start} next={next} page={page} prev={prev} end={end}/>
                        </View>
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
        marginTop: 40,
        alignItems: 'center'
    },
    content: {
        flex: 1,
    },
    heading: {
        color: 'pink',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 30,
        marginBottom: 30,
    },
    desc: {
        color : 'white',
        padding: 13,
        textAlign: 'center'
    },
    detail: {
        flexDirection: 'row'
    }
})