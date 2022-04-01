import React from 'react';
import {
    HomeScreen,
    CreateQuizScreen,
    AddQuestionScreen,
    PlayQuizzScreen,
} from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const AppStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen
                name="CreateQuizScreen"
                component={CreateQuizScreen}
            />
            <Stack.Screen
                name="AddQuestionScreen"
                component={AddQuestionScreen}
            />
            <Stack.Screen name="PlayQuizzScreen" component={PlayQuizzScreen} />
        </Stack.Navigator>
    );
};

export default AppStackNavigator;
