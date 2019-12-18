import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import AuthScreen from './src/components/AuthScreen';
import SpotifyWebAuthScreen from './src/components/SpotifyWebAuthScreen';

import AppColors from './src/api/AppColors';


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

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;
