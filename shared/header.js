import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { app_width } from '../styles/global';

export default function Header({ title, navigation }) {
    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.header}>

            <MaterialIcons
                name='menu'
                size={28}
                onPress={openMenu}
                style={styles.icon}
            />
            <View style={styles.headerTitle}>
                <Image
                    style={styles.headerImage}
                    source={require('../assets/heart_logo.png')}
                />
                <Text style={styles.headerText}>{title}</Text>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        width: app_width,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        marginHorizontal: 10
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerImage: {
        width: 26,
        height: 26
    },
    imageBackground: {
        flex: 1
    }
})