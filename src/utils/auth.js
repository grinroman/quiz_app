import {auth} from '../../firebase';
import {ToastAndroid} from 'react-native';

 export const signIn = (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
    const user = userCredentials.user;
    ToastAndroid.show(`Logged in with: ${user.email}!`, ToastAndroid.SHORT);
    })
    .catch(error => alert(error.message))
};

 export const signUp = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      ToastAndroid.show('Signed up!', ToastAndroid.SHORT);
    })
    .catch(err => {
      console.log(err);
    });
};

export const signOut = () => {
  auth
    .signOut()
    .then(() => {
      ToastAndroid.show('Signed Out!', ToastAndroid.SHORT);
    });
};