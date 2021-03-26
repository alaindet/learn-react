import React, { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { SignInFeature } from '../features/sign-in/sign-in';
import { ShoppingListFeature } from '../features/shopping-list/shopping-list';

export const Routes: FunctionComponent<any> = ({ user }) => {

  return (
    <Switch>
      <Route
        path="/"
        exact
        render={
          () => !!user
            ? <ShoppingListFeature />
            : <Redirect to="/sign-in" />
        }
      />
      <Route
        exact
        path="/sign-in"
        render={
          () => !user
            ? <SignInFeature />
            : <Redirect to="/" />
        }
      />
    </Switch>
  );
};
