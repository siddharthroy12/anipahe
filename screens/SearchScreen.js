import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Header from '../components/Header'
import globalStyle from '../styles/globalStyle'
import axios from 'axios'
import AnimeTitle from '../components/AnimeTitle'

export default function SearchScreen() {
    const [text, setText] = useState('sadas')
    const [list, setList] = useState([])

    const search = async () => {
        try {
            const res = await axios.get(`https://animepahe.com/api?m=search&l=8&q=${text}`)
            setList(res.data.data)
        } catch(e) {
            console.log(e)
        }
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
                    <FlatList
                        style={{flex:1}}
                        data={list}
                        renderItem={({item}) => (
                            <AnimeTitle
                                image={item.poster}
                                title={item.title}
                                type={item.type}
                                episodes={item.episodes}
                                status={item.status}
                                season={item.season}
                                year={item.year}
                            />
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
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