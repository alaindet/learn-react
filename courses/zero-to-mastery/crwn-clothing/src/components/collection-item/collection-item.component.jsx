import React from 'react';

import './collection-item.style.scss';

export const CollectionItem = (props) => {

  const backgroundImage = `url(${props.imageUrl})`;

  return (
    <div className="collection-item">
      <div className="background-image" style={{ backgroundImage }}></div>
      <div className="collection-footer">
        <span className="name">{props.name}</span>
        <span className="price">{props.price}</span>
      </div>
    </div>
  );
};
