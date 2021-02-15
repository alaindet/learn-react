import React, { useState, useEffect, useCallback } from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.style.scss';
import { auth, createUserProfileDocument } from './core/firebase/utils';
import { Header } from './components/header/header.component';
import { HomePage } from './pages/home/home.component';
import { SignInPage } from './pages/sign-in/sign-in.component';
import { ShopPage } from './pages/shop/shop.component';
import { HatsPage } from './pages/hats/hats.component';
import { JacketsPage } from './pages/jackets/jackets.component';
import { SneakersPage } from './pages/sneakers/sneakers.component';
import { WomenPage } from './pages/women/women.component';
import { MenPage } from './pages/men/men.component';
import { ContactPage } from './pages/contact/contact.component';

export const App = () => {

  const [currentUser, setCurrentUser] = useState(null);

  const updateCurrentUser = useCallback(snapshot => setCurrentUser({
    id: snapshot.id,
    ...snapshot.data(),
  }), []);

  const onAuthStateChanged = useCallback(async user => {
    if (user !== null) {
      const userRef = await createUserProfileDocument(user);
      userRef.onSnapshot(updateCurrentUser);
    }
  }, [updateCurrentUser]);

  useEffect(() => {
    const authSub = auth.onAuthStateChanged(onAuthStateChanged);
    return () => authSub();
  }, [onAuthStateChanged]);

  return (
    <>

      {/* Remove */}
      {console.log('currentUser', currentUser)}

      <Header currentUser={currentUser} />
      <main className="main-content container">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/hats" component={HatsPage} />
          <Route path="/jackets" component={JacketsPage} />
          <Route path="/sneakers" component={SneakersPage} />
          <Route path="/women" component={WomenPage} />
          <Route path="/men" component={MenPage} />
          <Route path="/contact" component={ContactPage} />
          {/* 404 here... */}
        </Switch>
      </main>
    </>
  );
};
