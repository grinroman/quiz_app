import { View, Text, SafeAreaView, ToastAndroid } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../constants/theme';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';
import { createQuiz } from '../utils/database';

const CreateQuizScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleQuizSave = async () => {
        const currentQuizId = Math.floor(
            100000 + Math.random() * 9000
        ).toString();
        //save the quiz
        await createQuiz(currentQuizId, title, description);
        //Navigate to Add Question string
        navigation.navigate('AddQuestionScreen', {
            currentQuizId: currentQuizId,
            currentQuisTitle: title,
        });
        //reset the navigation
        setTitle('');
        setDescription('');
        ToastAndroid.show('Quizz saved successfully!', ToastAndroid.SHORT);
    };
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: COLORS.white, padding: 20 }}
        >
            <Text
                style={{
                    fontSize: 25,
                    textAlign: 'center',
                    marginVertical: 20,
                    color: COLORS.black,
                }}
            >
                Create a new quiz
            </Text>
            <FormInput
                labelText="Title"
                placeholder="enter title"
                onChangeText={(value) => setTitle(value)}
                value={title}
            />
            <FormInput
                labelText="Description"
                placeholder="enter your description"
                onChangeText={(value) => setDescription(value)}
                value={description}
            />
            <FormButton labelText="Save Quiz" handleOnPress={handleQuizSave} />
            {/*temp button*/}
            <FormButton
                labelText="nav to AddQuestionScreen"
                handleOnPress={() =>
                    navigation.navigate('AddQuestionScreen', {
                        currentQuizId: '104921',
                        currentQuisTitle: 'shmek',
                    })
                }
            />
        </SafeAreaView>
    );
};

export default CreateQuizScreen;
