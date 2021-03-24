import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { FIREBASE_CONFIG } from './config';

firebase.initializeApp(FIREBASE_CONFIG);

const storeUser = async (userRef: any, user: any) => {
  const createdAt = new Date();
  await userRef.set({ ...user, createdAt });
};

// Export: Auth
export const auth = firebase.auth();

// Export: Firestore
export const firestore = firebase.firestore();

// Export: Create user profile document
export const createUserProfileDocument = async (userAuth: any, otherData?: any) => {

  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    try {
      const { displayName, email } = userAuth;
      const user = { displayName, email, ...otherData };
      storeUser(userRef, user);
    } catch (error) {
      console.error('Error creating user', error.message);
    }
  }

  return userRef;
};

// Export: Firebase as it is
export default firebase;
