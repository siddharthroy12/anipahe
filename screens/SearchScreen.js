import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, FlatList, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Header from '../components/Header'
import globalStyle from '../styles/globalStyle'
import axios from 'axios'
import AnimeTitle from '../components/AnimeTitle'

export default function SearchScreen({ navigation }) {
    const [text, setText] = useState('sadas')
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    const search = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`https://animepahe.com/api?m=search&l=8&q=${text}`)
            setList(res.data.data)
        } catch(e) {
        }
        setLoading(false)
    }

    return (
        <View style={globalStyle.container}>
            <Header title='Search'/>
                <View style={globalStyle.content}>
                    <View style={styles.searchBox}>
                        <TextInput
                            onSubmitEditing={search}
                            style={styles.searchInput}
                            onChangeText={text => setText(text)}
                            value={text}
                        />
                        <TouchableOpacity style={styles.searchIcon} onPress={search}>
                            <MaterialIcons
                                name="search"
                                color="white"
                                size={36}
                            />
                        </TouchableOpacity>
                    </View>
                    {loading ? (
                        <View style={{marginTop: 40}}>
                            <ActivityIndicator color="white" size={50}/>
                        </View>
                    ): (
                        <FlatList
                            style={{flex:1}}
                            data={list}
                            renderItem={({item}) => (
                                <TouchableOpacity onPress={() => navigation.navigate('AnimeScreen', { session: item.session, id: item.id })}>
                                    <AnimeTitle
                                        image={item.poster}
                                        title={item.title}
                                        type={item.type}
                                        episodes={item.episodes}
                                        status={item.status}
                                        season={item.season}
                                        year={item.year}
                                    />
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item.id.toString()}
                        />
                    )}
                </View>
            <StatusBar style='dark'/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        borderColor: '#D5015B',
        borderWidth: 1,
        backgroundColor: 'white',
        padding: 0,
        height: 40,
        flexDirection: 'row',
        marginBottom: 5
    },
    searchInput: {
        flex: 6,
        paddingHorizontal: 5
    },
    searchIcon: {
        flex: 1,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D5015B'
    }
})