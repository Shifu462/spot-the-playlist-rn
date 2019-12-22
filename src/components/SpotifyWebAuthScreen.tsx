import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Spotify from '../utils/Spotify';

export default function SpotifyWebAuthScreen() {
    return (
        <View style={styles.container}>
            <WebView
                style={styles.webView}
                source={{uri: Spotify.AuthLink}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
    },
    webView: {
        alignSelf: 'stretch',
        flex: 1,
    },
})