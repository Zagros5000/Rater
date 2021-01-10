import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text>
                use this app to rate items
            </Text>
        </View>
    )
}
