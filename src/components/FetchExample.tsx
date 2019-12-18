import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Alert } from 'react-native';

interface Movie {
    id: string;
    releaseYear: string;
    title: string;
}

export default class FetchExample extends React.Component {
    state = {
        dataSource: [] as Movie[],
        isLoading: true,
    };

    async componentDidMount() {
        const response = await fetch('https://facebook.github.io/react-native/movies.json');
        const { movies } = await response.json() as { movies: Movie[] };
        this.setState({
            isLoading: false,
            dataSource: movies,
        });
    }

    render() {

        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
              </View>
            )
          }

        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => (
                        <Text style={{ color: '#fff' }}> { item.title } ({ item.releaseYear }) </Text>
                    )}
                    keyExtractor={(item, index) => item.id + index}
                />
            </View>
        );
    }
}
