// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const _firebaseConfig = {
    apiKey: 'AIzaSyB7RmSkFxdsNUq7Sad8XCjkztKIBNCLVjM',
    authDomain: 'quiz-app-74bf6.firebaseapp.com',
    projectId: 'quiz-app-74bf6',
    storageBucket: 'quiz-app-74bf6.appspot.com',
    messagingSenderId: '766190943829',
    appId: '1:766190943829:web:b2e6d96de30d6ec4269edc',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(_firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
