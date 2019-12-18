import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import AppColors from '../api/AppColors';
import SpotifyAuth from './SpotifyAuth';

export default class AuthPage extends React.Component {
    state = {
        showSpotifyAuth: false,
    };

    render() {
        if (this.state.showSpotifyAuth) 
            return <SpotifyAuth />;
        
        return (
            <View>
                <View style={styles.tokenMessageContainer}>
                    <Text style={styles.text}>У вас не сохранён токен.</Text>
                </View>

                <TouchableHighlight
                    style={styles.getTokenButton}
                    onPress={() => this.setState({showSpotifyAuth: true})}
                >
                    <Text style={styles.getTokenButtonText}>Получить</Text>
                </TouchableHighlight>
            </View>
        );
        
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
    tokenMessageContainer: {
        padding: 20,
        borderWidth: 2,
        borderColor: '#ccc',
    },
    getTokenButton: {
        marginTop: 20,
        backgroundColor: AppColors.SpotifyGreen,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center',
    },
    getTokenButtonText: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
})