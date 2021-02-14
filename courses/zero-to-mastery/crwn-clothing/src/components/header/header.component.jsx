import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';
import { auth } from '../../core/firebase/utils';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const SignInOrOut = ({ currentUser }) => {

  if (currentUser) {
    return (
      <span className="option like-link" onClick={() => auth.signOut()}>
        SIGN OUT
      </span>
    );
  }

  return <Link className="option" to="/signin">SIGN IN</Link>;
};

export const Header = ({ currentUser }) => {
  return (
    <header>
      <div className="header-content container">
        <Link to="/" className="brand unstyled-link">
          <Logo className="logo" />
          <h1 className="title">Crwn Clothing</h1>
        </Link>
        <div className="options">
          <Link to="/shop" className="option">SHOP</Link>
          <Link to="/contact" className="option">CONTACT</Link>
          <SignInOrOut currentUser={currentUser} />
        </div>
      </div>
    </header>
  );
};
