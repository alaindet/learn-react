import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.style.scss';
import { SignInOrOut } from '../sign-in-or-out/sign-in-or-out.component';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { CartIcon } from '../cart-icon/cart-icon.component';
import { CartDropdown } from '../cart-dropdown/cart-dropdown.component';

const Header_ = (props) => {
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
          <SignInOrOut />
          <CartIcon />
        </div>
        {props.isCartVisible && <CartDropdown />}
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  isCartVisible: state.cart.visible,
});

export const Header = connect(
  mapStateToProps,
)(Header_);
