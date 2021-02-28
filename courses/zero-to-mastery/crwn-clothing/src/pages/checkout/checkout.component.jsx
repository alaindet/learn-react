import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.style.scss';
import { selectCartItems } from '../../redux';

export const CheckoutPage_ = (props) => {
  return (
    <div className="checkout-page">
      Checkout page
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
});

export const CheckoutPage = connect(
  mapStateToProps,
)(CheckoutPage_);
