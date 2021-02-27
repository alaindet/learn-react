import React from 'react';
import { connect } from 'react-redux';

import './collection-item.style.scss';
import { addItemToCart } from '../../redux';
import { Button } from '../button/button.component';

const CollectionItem_ = (props) => {

  const { name, price, imageUrl } = props.item;
  const backgroundImage = `url(${imageUrl})`;

  const onClick = () => props.addItemToCart(props.item);

  return (
    <div className="collection-item">
      <div className="background-image" style={{ backgroundImage }}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <div className="cta">
        <Button outline onClick={onClick}>Add to cart</Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item)),
});

export const CollectionItem = connect(
  null,
  mapDispatchToProps,
)(CollectionItem_);
