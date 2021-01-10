import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import { ReviewForm } from './reviewForm';
// destructure navigation from props
export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    // todo: load this in using firebase
    const [reviews, setReviews] = useState([
        {
            title: 'Book 1', body: 'lorem ipsum', rating: 1, id: '1'
        },
        {
            title: 'Book 2', body: 'lorem ipsum', rating: 2, id: '2'
        },
        {
            title: 'Book 3', body: 'lorem ipsum', rating: 3.5, id: '3'
        },
        {
            title: 'Book 4', body: 'lorem ipsum', rating: 5, id: '4'
        },
    ])
    const pressHandler = (e, item) => {
        e.preventDefault();
        navigation.navigate('ReviewDetails', item);
    }
    const addReview = (review) => {
        review.id = toString(parseInt(reviews[reviews.length - 1].id) + 1);
        setReviews((prevReviews) => (
            [review, ...prevReviews]
        ));
        setModalOpen(false);
    }
    return (
        <View style={styles.container}>

            <Modal style={styles.modal} visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{
                                ...styles.modalToggle,
                                ...styles.modalClose
                            }}
                            onPress={e => { e.preventDefault(); setModalOpen(false); }}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>


            </Modal>
            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={e => { e.preventDefault(); setModalOpen(true); }}
            />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={reviews}
                    keyExtractor={(item) => {
                        return item.id
                    }}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={e => { pressHandler(e, item) }}>
                            <Card>
                                <Text style={globalStyles.titleText}>
                                    {item.title}
                                </Text>
                            </Card>
                        </TouchableOpacity>
                    )}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingHorizontal: 8,
        flex: 1
    },
    modal: {
        maxHeight: '50%'
    },
    modalToggle: {
        marginBottom: 10,
        padding: 6,
        alignSelf: 'center'
    },
    modalContent: {
        flex: 1
    },
    modalClose: {
        marginTop: 10,
        marginBottom: 0,
        alignSelf: 'flex-start'
    }
})
