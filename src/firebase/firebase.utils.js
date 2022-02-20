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

export const createUserProfileDocument = async (userAuth, aditionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...aditionalData
      })
    } catch(error) {
      console.warn('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
