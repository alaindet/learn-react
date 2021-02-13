import React from 'react';

import './collection-item.style.scss';

export const CollectionItem = ({ name, imageUrl, price }) => {

  const backgroundImage = `url(${imageUrl})`;

  return (
    <div className="collection-item">
      <div className="background-image" style={{ backgroundImage }}></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};
