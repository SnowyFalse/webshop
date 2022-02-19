import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyC5VgEvo10pfHS9Y5WipQ4K6WsHJ8WwXfA",
  authDomain: "webshop-db-28b8b.firebaseapp.com",
  projectId: "webshop-db-28b8b",
  storageBucket: "webshop-db-28b8b.appspot.com",
  messagingSenderId: "302372917624",
  appId: "1:302372917624:web:560eadc736457b1193f88d",
  measurementId: "G-YJ04XVJHK6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
