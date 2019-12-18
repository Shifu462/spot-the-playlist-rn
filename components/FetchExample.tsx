import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Alert } from 'react-native';

export default class FetchExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            isLoading: true,
        };
    }

    async componentDidMount() {
        Alert.alert('hello!');
        try {
            const response = await fetch('https://facebook.github.io/react-native/movies.json');
            const responseJson = await response.json();
            this.state = {
                isLoading: false,
                dataSource: responseJson.movies,
            };
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {

        if((this.state as any).isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <FlatList
                    data={(this.state as any).dataSource}
                    renderItem={({ item }) => (
                        <Text>
                            {(item as any).title}, {(item as any).releaseYear}
                        </Text>
                    )}
                    keyExtractor={({ id }, index) => id}
                />
            </View>
        );
    }
}
