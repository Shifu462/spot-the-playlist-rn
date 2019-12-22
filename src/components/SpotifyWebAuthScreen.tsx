import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { WebView, WebViewNavigation } from 'react-native-webview';
import Spotify from '../utils/Spotify';
import { NavigationInjectedProps } from 'react-navigation';

export default class SpotifyWebAuthScreen extends React.Component<NavigationInjectedProps> {
    extractFromUrl(url: string) {
        const urlHash = url.split('#')[1];
        const results = /access_token=(.+)&token_type=(\w+)&/g
                                .exec(urlHash);
        if (results && results.length >= 1)
            return {
                token: results[1],
                type: results[2],
            };
        else
            return {
                token: null,
                type: null,
            };
    }

    state = {
        token: null as string | null
    }

    async onNavigationStateChange(ev: WebViewNavigation) {
        if (this.state.token) return;

        if (ev.url.startsWith(Spotify.redirectUri)) {
            const { token } = this.extractFromUrl(ev.url);
            this.setState({token});

            const spotify = new Spotify(token);
            const recentTracks = await spotify.getRecentTracks();

            Alert.alert('', recentTracks.slice(0, 20).map(t => `${t.Author} — ${t.Name}`).join('\n'));

            this.props.navigation.goBack();
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    style={styles.webView}
                    source={{uri: Spotify.AuthLink}}
                    onNavigationStateChange={(ev) => this.onNavigationStateChange(ev)}
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
        alignSelf: 'stretch',
        flex: 1,
    },
})