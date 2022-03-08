
import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ToastAndroid } from 'react-native';
import { COLORS } from '../constants/theme.js';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';
import { signIn } from '../utils/auth';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = () => {
    //ToastAndroid.show("registered!", ToastAndroid.SHORT);
   signIn(email, password);

  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: COLORS.black,
          fontWeight: '800',
          marginVertical: 32,
        }}
      >
        Sing in
      </Text>
      <FormInput
        labelText="Email"
        placeholderText="enter your email"
        onChangeText={(value) => setEmail(value)}
        value={email}
        keyBoardType={'email-adress'}
      />
      <FormInput
        labelText="Password"
        placeholderText="enter your password"
        onChangeText={(value) => setPassword(value)}
        value={password}
        secureTextEntry={true}
      />
      <FormButton
        labelText="Submit"
        style={{ width: '100%' }}
        handleOnPress={handleOnSubmit}
      />
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}
      >
        <Text>Don't have an account?</Text>
        <Text
          style={{ marginLeft: 4, color: COLORS.primary }}
          onPress={() => navigation.navigate('SignUpScreen')}
        >
          Create account
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default SignInScreen;

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.replace("Home")
  //     }
  //   })

  //   return unsubscribe
  // }, [])

  // const handleSignUp = () => {
  //   auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(userCredentials => {
  //       const user = userCredentials.user;
  //       console.log('Registered with:', user.email);
  //     })
  //     .catch(error => alert(error.message))
  // }