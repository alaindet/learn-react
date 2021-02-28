import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomePage } from '../pages/home/home.component';
import { CheckoutPage } from '../pages/checkout/checkout.component';
import { SignInPage } from '../pages/sign-in/sign-in.component';
import { ShopPage } from '../pages/shop/shop.component';
import { HatsPage } from '../pages/hats/hats.component';
import { JacketsPage } from '../pages/jackets/jackets.component';
import { SneakersPage } from '../pages/sneakers/sneakers.component';
import { WomenPage } from '../pages/women/women.component';
import { MenPage } from '../pages/men/men.component';
import { ContactPage } from '../pages/contact/contact.component';

const renderSignInPage = user => (
  user
    ? <Redirect to="/" />
    : <SignInPage />
);

export const Routes = ({ currentUser }) => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/checkout" component={CheckoutPage} />
    <Route path="/shop" component={ShopPage} />
    <Route exact path="/hats" component={HatsPage} />
    <Route exact path="/jackets" component={JacketsPage} />
    <Route exact path="/sneakers" component={SneakersPage} />
    <Route exact path="/women" component={WomenPage} />
    <Route exact path="/men" component={MenPage} />
    <Route exact path="/contact" component={ContactPage} />
    <Route exact path="/sign-in" render={() => renderSignInPage(currentUser)} />
  </Switch>
);
