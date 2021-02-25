import React from 'react';

import './collection-preview.style.scss';
import { CollectionItem } from '../collection-item/collection-item.component';

export const CollectionPreview = (props) => {

  const firstFourItems = props.items.slice(0, 4);

  return (
    <div className="collection-preview">
      <h3 className="title">{props.title}</h3>
      <div className="preview">
        {firstFourItems.map(({ id, ...item }) => (
          <CollectionItem key={id} {...item} />
        ))}
      </div>
    </div>
  );
};
