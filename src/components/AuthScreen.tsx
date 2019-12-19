import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import AppColors from '../api/AppColors';
import { NavigationInjectedProps } from 'react-navigation';

export default class AuthScreen extends React.Component<NavigationInjectedProps> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tokenMessageContainer}>
                    <Text style={styles.text}>У вас не сохранён токен.</Text>
                </View>

                <TouchableHighlight
                    style={styles.getTokenButton}
                    onPress={() => this.props.navigation.navigate('SpotifyWebAuth')}
                >
                    <Text style={styles.getTokenButtonText}>Логин через Spotify</Text>
                </TouchableHighlight>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    text: {
        color: AppColors.White,
    },
    tokenMessageContainer: {
        padding: 20,
        borderWidth: 1,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        backgroundColor: AppColors.StrictBlack,
        alignSelf: 'stretch',
        borderColor: AppColors.Gray,
    },
    getTokenButton: {
        marginTop: 20,
        backgroundColor: AppColors.Green,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center',
    },
    getTokenButtonText: {
        color: AppColors.White,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
})