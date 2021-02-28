import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'redux';

import { goToCheckout } from '../../redux';
import { CartItems } from '../cart-items/cart-items.component';
import { Button } from '../button/button.component';
import './cart-dropdown.style.scss';

const CartDropdown_ = ({ history, goToCheckout }) => {

  const onCheckout = () => {
    goToCheckout();
    history.push('/checkout');
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CartItems />
      </div>
      <Button outline onClick={onCheckout}>
        GO&nbsp;TO&nbsp;CHECKOUT
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  goToCheckout: () => dispatch(goToCheckout())
});

export const CartDropdown = compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(CartDropdown_);
