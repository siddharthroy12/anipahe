import React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview';

export default function WebViewScreen({ route }) {
    return (
        <View style={{flex: 1, marginTop: 20}}>
            <WebView source={{uri: route.params.link}} style={{flex: 1}}/>
        </View>
    )
}
