import React, { useEffect, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './app.style.scss';
import { setCurrentUser } from './redux';
import { auth, createUserProfileDocument } from './core/firebase/utils';
import { Header } from './components/header/header.component';
import { ROUTES } from './core/routes';

const App_ = ({
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
        <Switch>
          {ROUTES.map((route, i) => (
            <Route key={i}
              render={currentUser => route.render(currentUser)}
              {...route}
            />
          ))}
        </Switch>
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App_);
