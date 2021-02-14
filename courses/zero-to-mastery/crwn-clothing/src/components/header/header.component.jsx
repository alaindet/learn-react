import React from 'react';
import { Link } from 'react-router-dom';

import './header.style.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

export const Header = () => {
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
          <Link to="/signin" className="option">SIGN IN</Link>
        </div>
      </div>
    </header>
  );
};
