import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {props.children}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 4,
        marginVertical: 4,
        ...Platform.select({
            ios: {
                shadowOpacity: 0.3,
                shadowRadius: 1,
                shadowOffset: {
                    height: 1,
                    width: 0
                },
            },
            android: {
                elevation: 3 
            }
        })
    },
    content: {

    }
})