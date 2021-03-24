import React, { useState, useCallback, useEffect} from 'react';

import './app.scss';
import { createUserProfileDocument, auth } from './core/firebase';
import { Routes } from './core/routes';

export const App = () => {

  const [currentUser, setCurrentUser] = useState<any>(null);

  const updateCurrentUser = useCallback(
    (snapshot: any) => {
      const { id } = snapshot;
      const user = { id, ...snapshot.data() };
      setCurrentUser(user);
    },
    [setCurrentUser]
  );

  const onAuthStateChanged = useCallback(
    async user => {
      if (!user) return;
      const userRef = await createUserProfileDocument(user);
      if (!userRef) return;
      userRef.onSnapshot(updateCurrentUser);
    },
    [updateCurrentUser]
  );

  useEffect(
    () => {
      const unsubscribeFromAuth = auth.onAuthStateChanged(onAuthStateChanged);
      return () => unsubscribeFromAuth();
    },
    [onAuthStateChanged]
  );

  return (
    <div className="app">
      <Routes currentUser={currentUser} />
    </div>
  );
}
