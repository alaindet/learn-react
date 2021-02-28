import React from 'react';

import './cart-item.style.scss';

export const CartItem = (props) => {

  const { imageUrl, name, price, quantity } = props.item;

  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity}x ${price}
        </span>
      </div>
    </div>
  );
};
