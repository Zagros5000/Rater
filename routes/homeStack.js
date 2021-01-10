import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import { Image } from 'react-native';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';
// top is the default
const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='Rater' navigation={navigation} />,
                headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{ height: '100%' }} />
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details',

        }
    }
}
// default navigation options can be overrided individually
const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);