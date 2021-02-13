import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './app.style.scss';
import { Header } from './components/header/header.component';
import { HomePage } from './pages/home/home.component';
import { ShopPage } from './pages/shop/shop.component';
import { HatsPage } from './pages/hats/hats.component';
import { JacketsPage } from './pages/jackets/jackets.component';
import { SneakersPage } from './pages/sneakers/sneakers.component';
import { WomenPage } from './pages/women/women.component';
import { MenPage } from './pages/men/men.component';
import { ContactPage } from './pages/contact/contact.component';

export const App = () => {
  return (
    <>
      <Header />
      <main className="main-content container">
        <Switch>
          <Route path="/" exact component={HomePage} />
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
