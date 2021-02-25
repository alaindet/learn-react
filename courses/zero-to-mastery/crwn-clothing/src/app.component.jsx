import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.style.scss';
import { auth, createUserProfileDocument } from './core/firebase/utils';
import { Header } from './components/header/header.component';
import { ROUTES } from './core/routes';

export const App = () => {

  const [currentUser, setCurrentUser] = useState(null);

  const updateCurrentUser = useCallback(
    snapshot => {
      const { id } = snapshot;
      const user = { id, ...snapshot.data() };
      setCurrentUser(user);
    },
    [setCurrentUser]
  );

  const onAuthStateChanged = useCallback(
    async user => {
      if (user !== null) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot(updateCurrentUser);
      }
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
    <>
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <main className="main-content container">
        <Switch>
          {ROUTES.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </main>
    </>
  );
};
