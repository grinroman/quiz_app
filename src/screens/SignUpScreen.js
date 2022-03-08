import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, Alert, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS } from '../constants/theme';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';
import { signUp } from '../utils/auth';

const SingUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirm] = useState('');

    const handleOnSubmit = () => {
        signUp(email, password);
    };
    // const validateTrigger = () => {
    //   ToastAndroid.show("Passwords don't match!", ToastAndroid.SHORT);
    // };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: 20,
            }}
        >
            <Text
                style={{
                    fontSize: 24,
                    color: COLORS.black,
                    fontWeight: 'bold',
                    marginVertical: 32,
                }}
            >
                Sign up
            </Text>
            <FormInput
                labelText="Email"
                placeholder="enter email"
                onChangeText={(value) => setEmail(value)}
                value={email}
                keyBoardType={'email-adress'}
            />
            <FormInput
                labelText="Password"
                placeholder="enter password"
                onChangeText={(value) => setPassword(value)}
                value={password}
                keyBoardType={'email-adress'}
                secureTextEntry={true}
            />
            <FormInput
                labelText="Confirm password"
                placeholder="enter confirmation"
                onChangeText={(value) => setConfirm(value)}
                value={confirmPassword}
                keyBoardType={'email-adress'}
                secureTextEntry={true}
            />
            <FormButton
                labelText="Sign up"
                style={{ width: '100%' }}
                handleOnPress={handleOnSubmit}
                // onPress={validateTrigger}
            />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                }}
            >
                <Text>Already have an account?</Text>
                <Text
                    style={{ marginLeft: 4, color: COLORS.primary }}
                    onPress={() => navigation.navigate('SignInScreen')}
                >
                    Sign in
                </Text>
            </View>
        </SafeAreaView>
    );
};
export default SingUpScreen;
