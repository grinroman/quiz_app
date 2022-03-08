import React from 'react';
import { Text, View } from 'react-native';
import { signOut } from '../utils/auth';
import FormButton from '../components/shared/FormButton';

const HomeScreen = ({ navigation }) => {
    const handleOnSceenChange = () => {
        navigation.navigate('CreateQuizScreen');
    };

    return (
        <View>
            <Text
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 60,
                }}
            >
                HomeScreen
            </Text>
            <Text onPress={signOut}>Logout</Text>
            <FormButton
                labelText={'CreateQuiz'}
                handleOnPress={handleOnSceenChange}
            />
        </View>
    );
};
export default HomeScreen;
