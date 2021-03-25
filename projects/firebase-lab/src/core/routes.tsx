import React, { FunctionComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { SignInFeature } from '../features/sign-in/sign-in';
import { ShoppingListFeature } from '../features/shopping-list/shopping-list';

const createRedirectGuard = (condition: boolean, redirectTo: string) => {
  return (FeatureComponent: FunctionComponent) => {
    return () => condition
      ? <FeatureComponent />
      : <Redirect to={redirectTo} />;
  };
};

export const Routes: FunctionComponent<any> = ({ user }) => {

  const signedInGuard = createRedirectGuard(!!user, '/sign-in');
  const guestGuard = createRedirectGuard(!user, '/');

  return (
    <Switch>
      <Route exact path="/" render={signedInGuard(ShoppingListFeature)} />
      <Route exact path="/sign-in" render={guestGuard(SignInFeature)} />
    </Switch>
  );
};
