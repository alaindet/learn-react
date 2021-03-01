import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.style.scss';
import { selectCartItems, selectCartTotal } from '../../redux';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';

export const CheckoutPage_ = (props) => {
  return (
    <div className="checkout-page">

      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Actions</span>
        </div>
      </div>

      <div className="checkout-items">
        {props.items.map(item => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>

      <div className="total">
        Total: ${props.totalPrice}
      </div>

    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  totalPrice: selectCartTotal,
});

export const CheckoutPage = connect(
  mapStateToProps,
)(CheckoutPage_);
