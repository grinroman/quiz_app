import 'react-native-gesture-handler';
import * as React from 'react';
import { useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './src/navigators/AuthStackNavigator';
import {auth} from './firebase';
import { HomeScreen } from './src/screens';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  const onAuthStateChanged = async (user) => {
    await setCurrentUser(user);
    setIsLoading(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [])

  if(isLoading) {return null;}
  

  return (
    <NavigationContainer>
     {currentUser ? <HomeScreen/> : <AuthStackNavigator/>}
    </NavigationContainer>
  );
};
export default App;
