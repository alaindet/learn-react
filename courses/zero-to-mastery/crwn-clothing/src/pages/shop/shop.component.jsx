import React from 'react';

import { SHOP } from '../../core/data/shop.data';
import { CollectionPreview } from '../../components/collection-preview/collection-preview.component';

export const ShopPage = () => {

  const collections = SHOP;

  return (
    <article>
      <h2>Collections</h2>
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </article>
  );

};
