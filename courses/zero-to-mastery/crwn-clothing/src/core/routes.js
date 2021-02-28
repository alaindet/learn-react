import { React } from 'react';
import { Redirect } from 'react-router-dom';

import { HomePage } from '../pages/home/home.component';
import { SignInPage } from '../pages/sign-in/sign-in.component';
import { ShopPage } from '../pages/shop/shop.component';
import { HatsPage } from '../pages/hats/hats.component';
import { JacketsPage } from '../pages/jackets/jackets.component';
import { SneakersPage } from '../pages/sneakers/sneakers.component';
import { WomenPage } from '../pages/women/women.component';
import { MenPage } from '../pages/men/men.component';
import { ContactPage } from '../pages/contact/contact.component';

export const ROUTES = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/signin',
    exact: true,
    render: user => user
      ? <Redirect to="/" />
      : <SignInPage />,
  },
  {
    path: '/shop',
    component: ShopPage,
  },
  {
    path: '/hats',
    component: HatsPage,
  },
  {
    path: '/jackets',
    component: JacketsPage,
  },
  {
    path: '/sneakers',
    component: SneakersPage,
  },
  {
    path: '/women',
    component: WomenPage,
  },
  {
    path: '/men',
    component: MenPage,
  },
  {
    path: '/contact',
    component: ContactPage,
  },
];
