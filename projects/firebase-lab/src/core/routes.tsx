import { FC } from 'react';
import { Switch, Route, RouteProps, Redirect } from 'react-router-dom';

import { SignInFeature } from '../features/sign-in/sign-in';
import { ShoppingListFeature } from '../features/shopping-list/shopping-list';

export interface GuardedRouteProps extends RouteProps {
  user: any;
}

export const LoggedRoute: FC<GuardedRouteProps> = ({ user, component, ...rest }) => {
  return !!user
    ? <Route component={component} {...rest} />
    : <Route {...rest} render={() => <Redirect to="/sign-in" />} />;
};

export const GuestRoute: FC<GuardedRouteProps> = ({ user, component, ...rest }) => {
  return !user
    ? <Route component={component} {...rest} />
    : <Route {...rest} render={() => <Redirect to="/" />} />;
};

export const Routes: FC<any> = ({ user }) => {
  return (
    <Switch>
      <LoggedRoute path="/" exact user={user} component={ShoppingListFeature} />
      <LoggedRoute path="/shopping-list" user={user} component={ShoppingListFeature} />
      <GuestRoute path="/sign-in" user={user} component={SignInFeature} />
    </Switch>
  );
};
