import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import Spotify from '../utils/Spotify';

export default class SpotifyAuth extends React.Component {
    state = {
        isLoading: true,
    };

    async componentDidMount() {
        console.log(Spotify.AuthLink);
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView style={styles.webView}
                    source={{uri: Spotify.AuthLink}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
    },
    webView: {
        // width: 100,
        marginTop: 20,
        alignSelf: 'stretch',
        flex: 1,
    },
})