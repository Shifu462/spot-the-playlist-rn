import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import AuthPage from './src/components/AuthPage';
import AppColors from './src/api/AppColors';

export default function App() {
    return (
        <View style={styles.container}>
            <AuthPage />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: AppColors.SpotifyBlack,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
