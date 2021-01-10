import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import FlatButton from '../shared/customButton';
import * as yup from 'yup';

function isFloat(val) {
    var floatRegex = /^-?\d+(?:[.]\d*?)?$/;
    if (!floatRegex.test(val))
        return false;

    val = parseFloat(val);
    if (isNaN(val))
        return false;
    return true;
}

const reviewSchema = yup.object({
    title: yup.string().required().min(1),
    body: yup.string().required().min(1),
    rating: yup.string().required()
        .test('is-num-0-5', 'Rating must be a decimal between 0-5', (val) => {
            return isFloat(val) && parseFloat(val) < 6 && parseFloat(val) >= 0;
        })


})
export function ReviewForm(props) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{
                    title: '',
                    body: '',
                    rating: ''
                }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    props.addReview(values);
                    // actions.resetForm();
                }}
            >
                {formikProps => (
                    <View>
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.title && formikProps.errors.title}
                        </Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Title'
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                            onBlur={formikProps.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.body && formikProps.errors.body}
                        </Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review Body'
                            multiline
                            minHeight={96}
                            onBlur={formikProps.handleBlur('body')}
                            onChangeText={formikProps.handleChange('body')}
                            value={formikProps.values.body}
                        />
                        <Text style={globalStyles.errorText}>
                            {formikProps.touched.rating && formikProps.errors.rating}
                        </Text>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Rating (0-5)'
                            onBlur={formikProps.handleBlur('rating')}
                            onChangeText={formikProps.handleChange('rating')}
                            value={formikProps.values.rating}
                            keyboardType='decimal-pad'
                        />
                        <View style={{ marginTop: 16 }}>
                            <FlatButton
                                text='submit'
                                onPress={formikProps.handleSubmit}
                            />
                        </View>


                    </View>
                )}
            </Formik>
        </View>
    );
}