import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
export default function ReviewDetails({ navigation }) {
    const pressHandler = () => {
        navigation.goBack();
    };
    const imageContainer = () => {
        let ratio = navigation.getParam('rating') / 5;
        return {
            width: 84 * ratio,
            overflow: 'hidden',
            zIndex: 10
        };
    }
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>
                    title: {navigation.getParam('title')}
                </Text>
                <Text>
                    body: {navigation.getParam('body')}
                </Text>
                <View style={styles.ratingContainer}>
                    <Text style={{ marginRight: 8 }}>
                        Rating:
                    </Text>
                    <View style={{ position: 'relative' }}>
                        <View style={imageContainer()}>
                            <Image source={require('../assets/rating-5.png')} />
                        </View>
                        <View style={{ position: 'absolute' }}>
                            <Image tintColor="grey" source={require('../assets/rating-5.png')} />
                        </View>
                    </View>


                </View>
            </Card>
            <View style={styles.buttonWrapper}>
                <Button
                    onPress={pressHandler}
                    title='Go Home'
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    ratingContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 16,
        width: '100%'

    }
})