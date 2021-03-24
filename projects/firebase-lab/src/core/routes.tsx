import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { SignInFeature } from '../features/sign-in/sign-in';
import { ShoppingListFeature } from '../features/shopping-list/shopping-list';

const renderSignInPage = (currentUser: any) => (
  currentUser
    ? <Redirect to="/shopping-list" />
    : <SignInFeature />
);

export const Routes = ({ currentUser }) => (
  <Switch>
    <Route exact path="/" render={() => renderSignInPage(currentUser)} />
    <Route exact path="/shopping-list" component={ShoppingListFeature} />
  </Switch>
);
