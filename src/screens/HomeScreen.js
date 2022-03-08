import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { signOut } from '../utils/auth';

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
       <Text onPress={signOut} style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 60,
      }}>Logout</Text>
    </View>
  );
};
export default HomeScreen;
