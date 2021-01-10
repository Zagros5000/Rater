import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
export default function FlatButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        marginTop: 16,
        backgroundColor: 'red',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
});
