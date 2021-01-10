import {StyleSheet, Dimensions} from 'react-native';

export const globalStyles = StyleSheet.create({
    container:{
        padding: 24,
        flex:1
    },
    titleText:{
        fontSize:18,
        color: '#333'
    },
    paragraph:{
        marginVertical: 8,
        lineHeight: 20
    },

    input:{
        borderWidth:1,
        borderColor: '#ddd',
        padding:10,
        fontSize: 18,
        borderRadius: 6
    },
    errorText:{
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
    
});

export const app_width = Dimensions.get('window').width; //full width