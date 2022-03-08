import {
    View,
    Text,
    KeyboardAvoidingView,
    StyleSheet,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../constants/theme';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';

const AddQuestionScreen = ({ navigation, route }) => {
    const [currentQuiz, setCurrentQuiz] = useState(route.params.currentQuizId);
    const [currentQuizTitle, setCurrentQuizTitle] = useState(
        route.params.currentQuisTitle
    );
    const [question, qetQuestion] = useState('');

    const [correctAnswer, setCorrectAnswer] = useState('');
    const [optionTwo, setOptionTwo] = useState('');
    const [optionThree, setOptionThree] = useState('');
    const [optionFour, setOptionFour] = useState('');

    const handleQuestion = () => {};

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.view}>
                    <Text style={styles.textTitle}>Add Question</Text>
                    <Text style={styles.text}>For {currentQuiz}</Text>
                    <FormInput
                        labelText="Question"
                        placeholder="Enter question"
                        onChangeText={(value) => setQuestion(value)}
                        value={question}
                    />
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
                        labelText="Done & Go Home"
                        isPrimary={false}
                        handleOnPress={() => {
                            setCurrentQuizId('');
                            navigation.navigate('HomeScreen');
                        }}
                        style={{
                            marginVertical: 20,
                        }}
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
});
