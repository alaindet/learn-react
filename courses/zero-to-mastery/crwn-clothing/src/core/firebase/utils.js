import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { FIREBASE_CONFIG } from './config';

firebase.initializeApp(FIREBASE_CONFIG);

// Auth
export const auth = firebase.auth();

// Firestore
export const firestore = firebase.firestore();

// Google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, otherData) => {

  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    try {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      const user = { displayName, email, createdAt, ...otherData };
      await userRef.set(user);
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  return userRef;
};

export default firebase;
