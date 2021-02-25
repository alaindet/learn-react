import React, { useEffect, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './app.style.scss';
import { setCurrentUser } from './redux';
import { auth, createUserProfileDocument } from './core/firebase/utils';
import { Header } from './components/header/header.component';
import { ROUTES } from './core/routes';

const App_ = (props) => {

  const updateCurrentUser = useCallback(
    snapshot => {
      const { id } = snapshot;
      const user = { id, ...snapshot.data() };
      props.setCurrentUser(user);
    },
    [props]
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
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </main>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export const App = connect(
  null,
  mapDispatchToProps,
)(App_);
