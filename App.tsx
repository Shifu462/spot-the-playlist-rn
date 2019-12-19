import {createAppContainer} from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import {createStackNavigator} from 'react-navigation-stack';

import AuthScreen from './src/components/AuthScreen';
import SpotifyWebAuthScreen from './src/components/SpotifyWebAuthScreen';

import reducer from './src/api/reducer';
import AppColors from './src/api/AppColors';
import React from 'react';

const MainNavigator = createStackNavigator({
    Auth: {screen: AuthScreen},
    SpotifyWebAuth: {screen: SpotifyWebAuthScreen},
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: AppColors.BarBlack,
        },
        headerTitleStyle: {
            color: AppColors.White,
        }
    },
    headerMode: 'screen',
    cardStyle: {
        backgroundColor: AppColors.Black,
    },
});

const store = createStore(reducer);
const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        )
    }
}
