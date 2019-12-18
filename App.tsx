import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    TouchableHighlight,
} from 'react-native';
import FetchExample from './components/FetchExample';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>У вас не сохранён токен.</Text>

            <TouchableHighlight
                style={styles.getTokenButton}
                onPress={() => Alert.alert('hello')}
            >
                <Text style={styles.getTokenButtonText}>Получить</Text>
            </TouchableHighlight>

            <FetchExample />
        </View>
    );
}

const buttonColor = '#1ed760';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 20, // не робит.
        color: 'white',
    },
    getTokenButton: {
        marginTop: 20, // не робит.
        backgroundColor: buttonColor,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    getTokenButtonText: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});
