import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet, Modal, TouchableHighlight, View, Button } from 'react-native'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
export default function EpisodeCard({ fansub ,title, snapshot, episode, duration=null, animeId, session }) {
    const navigation = useNavigation();
    let text = ""
    if (duration === null) {
        text = `[${fansub}] ${title}`
    }

    const [modalOpen, setModalOpen] = useState(false)
    const [links, setLinks] = useState([])

    useEffect(() => {
        const cancelTokenSource = axios.CancelToken.source();
        axios.get(`https://animepahe.com/api?m=links&id=${animeId}&session=${session}&p=kwik`,
        { cancelToken: cancelTokenSource.token })
        .then(res => {
            setLinks(res.data.data)
        })
        .catch(err => {})
        return () => {
            cancelTokenSource.cancel();
        }
    },[])
    
    return (
        <View style={styles.imageBackground}>
        <TouchableHighlight  onPress={() => setModalOpen(!modalOpen)}>
            <ImageBackground
            source={{
                uri: snapshot
            }}
            style={styles.imageBackground}
            imageStyle={styles.image}>
            {duration ? (
                <Text
                    style={{
                        color: 'white',
                        position: 'absolute',
                        bottom: 5,
                        fontSize: 13,
                        left: 6,
                        backgroundColor: 'black',
                        paddingHorizontal: 4
                    }}>
                    {duration}
                </Text>
            ) : (
                <Text
                    style={{...styles.text, left: 6}}
                    numberOfLines={1}>
                    {text}
                </Text>
            )}
            
            <Text
                style={{...styles.text, right: 6, width: 25, textAlign: 'center' }}>
                { episode }
            </Text>
        </ImageBackground>
        </TouchableHighlight>
        {modalOpen && (
            <Modal onRequestClose={() => setModalOpen(false)} >
                <View style={styles.downloadModal}>
                <Text style={{color: 'white', fontSize: 20, marginBottom: 40}}>Select Resolution</Text>
                {links.map(link => {
                    let res = Object.keys(link)
                    return (
                        <View style={{ marginVertical: 10 }} key={link[res[0]].id}>
                            <Button
                                title={res[0] + 'p - dub(' + link[res[0]].audio + ') '
                                    + Math.ceil(link[res[0]].filesize / 1000000) + 'MB'
                                }
                                color='#D5015B'
                                onPress={() => {
                                    setModalOpen(false)
                                    navigation.navigate('HomeNavigator', { screen: 'WebViewScreen', params: { link: link[res[0]].kwik_adfly }})}
                                }
                            />
                        </View>
                    )
                })}
                <Text style={{color: 'grey', fontSize: 13, marginTop: 20}}>Tip: Wait for the page to load and don't click on ads.</Text>
                </View>
            </Modal>
        )}
        </View>
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
        fontSize: 14,
        flex: 1,
        width: 240,
    },
    downloadModal: {
        backgroundColor: 'black',
        flex: 1,
        padding: 30,
        alignItems: 'center'
    },
    downloadButton: {
        color: '#D5015B',
        width: 100
    }
})