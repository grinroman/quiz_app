import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView,
    ToastAndroid,
    TouchableOpacity,
    ActivityIndicator,
    Image,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../constants/theme';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';
import { createQuestion } from '../utils/database';
import * as ImagePicker from 'expo-image-picker';
import * as Firebase from 'firebase';

const AddQuestionScreen = ({ navigation, route }) => {
    const [currentQuizId, setCurrentQuizId] = useState(
        route.params.currentQuizId
    );

    const [currentQuizTitle, setCurrentQuizTitle] = useState(
        route.params.currentQuizTitle
    );

    const [question, setQuestion] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [optionTwo, setOptionTwo] = useState('');
    const [optionThree, setOptionThree] = useState('');
    const [optionFour, setOptionFour] = useState('');
    const [imageUri, setImageUri] = useState('');
    const [uploading, setUploading] = useState(true);

    let currentQuestionId = Math.floor(
        100000 + Math.random() * 9000
    ).toString();

    const imgUpload = async (imageUri) => {
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                resolve(xhr.response);
            };
            xhr.onerror = function (e) {
                console.log(e);
                reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', imageUri, true);
            xhr.send(null);
        });

        const ref = Firebase.storage()
            .ref()
            .child(`questions/${currentQuizId}_${currentQuestionId}`);
        const snapshot = await ref.put(blob);
        snapshot.on(
            Firebase.storage.TaskEvent.STATE_CHANGED,
            () => {
                setImageUri('');
            },
            (error) => {
                stUploading(false);
                console.log(error);
                blob.close();
                return;
            },
            () => {
                snapshot.snapshot.ref.getDownloadURL().then((url) => {
                    setImageUri('');
                    console.log(url);
                    blob.close();
                    return url;
                });
            }
        );
    };

    const handleQuestionSave = async () => {
        if (
            question == '' ||
            correctAnswer == '' ||
            optionTwo == '' ||
            optionThree == '' ||
            optionFour == ''
        ) {
            return;
        }

        let currentQuestionId = Math.floor(
            100000 + Math.random() * 9000
        ).toString();

        // Upload Image
        imgUpload(imageUri);

        await createQuestion(currentQuizId, currentQuestionId, {
            question,
            correct_answer: correctAnswer,
            incorrect_answers: [optionTwo, optionThree, optionFour],
            imageUri,
        });
        ToastAndroid.show('Question created successfully!', ToastAndroid.SHORT);
        setQuestion('');
        setCorrectAnswer('');
        setOptionTwo('');
        setOptionThree('');
        setOptionFour('');
        setImageUri('');
    };

    const selectImage = async () => {
        //No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImageUri(result.uri);
        }
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.view}>
                    <Text style={styles.textTitle}>Add Question</Text>
                    <Text style={styles.text}>
                        For {`\"${currentQuizTitle}\"`} quizz!
                    </Text>
                    <FormInput
                        labelText="Question"
                        placeholder="Enter question"
                        onChangeText={(value) => setQuestion(value)}
                        value={question}
                    />
                    {/*Image upload */}
                    {imageUri == '' ? (
                        <TouchableOpacity
                            style={styles.touchableOpacityImg}
                            onPress={selectImage}
                        >
                            <Text style={styles.textImg}>+ add image</Text>
                        </TouchableOpacity>
                    ) : (
                        <Image
                            source={{
                                uri: imageUri,
                            }}
                            resizeMode={'cover'}
                            style={styles.image}
                        />
                    )}
                    {/*Options*/}
                    <View style={styles.options}>
                        <FormInput
                            labelText="Correct answer"
                            onChangeText={(value) => setCorrectAnswer(value)}
                            value={correctAnswer}
                        />
                    </View>
                    <FormInput
                        labelText="Option 2"
                        onChangeText={(val) => setOptionTwo(val)}
                        value={optionTwo}
                    />
                    <FormInput
                        labelText="Option 3"
                        onChangeText={(val) => setOptionThree(val)}
                        value={optionThree}
                    />
                    <FormInput
                        labelText="Option 4"
                        onChangeText={(val) => setOptionFour(val)}
                        value={optionFour}
                    />
                    <FormButton
                        labelText="Save Question"
                        handleOnPress={handleQuestionSave}
                    />
                    <FormButton
                        labelText="Done & Go Home"
                        isPrimary={false}
                        handleOnPress={() => {
                            setCurrentQuizId('');
                            navigation.navigate('HomeScreen');
                        }}
                        style={styles.goHome}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default AddQuestionScreen;

const styles = StyleSheet.create({
    container: { flex: 1 },
    scroll: { flex: 1, backgroundColor: COLORS.white },
    view: { padding: 25 },
    textTitle: {
        fontSize: 20,
        textAlign: 'center',
        color: COLORS.black,
    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
        color: COLORS.black,
    },
    options: { marginTop: 30 },
    goHome: { marginVertical: 20, borderWidth: 1 },
    touchableOpacityImg: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 28,
        borderRadius: 10,
        backgroundColor: COLORS.primary + '40',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 5,
    },
    textImg: { opacity: 0.5, color: COLORS.primary },
});
