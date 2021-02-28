import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './app.style.scss';
import { setCurrentUser, selectCurrentUser } from './redux';
import { auth, createUserProfileDocument } from './core/firebase/utils';
import { Header } from './components/header/header.component';
import { Routes } from './core/routes.component';

const App_ = ({
  currentUser,
  setCurrentUser,
}) => {

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
    <React.Fragment>
      <Header />
      <main className="main-content container">
        <Routes currentUser={currentUser} />
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App_);
