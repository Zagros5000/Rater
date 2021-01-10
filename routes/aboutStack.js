import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';
import React from 'react';
import Header from '../shared/header';
import { Image } from 'react-native';
// top is the default in stack navigation
const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='About Rater' navigation={navigation} />,
                headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{ height: '100%' }} />
            }
        }
    }
};
// default navigation options can be overrided individually
const AboutStack = createStackNavigator(screens);

export default AboutStack;