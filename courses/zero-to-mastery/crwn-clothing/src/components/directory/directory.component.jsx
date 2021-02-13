import React from 'react'

import './directory.style.scss';
import sectionImages from '../../core/data/section-images';
import MenuItem from '../menu-item/menu-item-component';

const sections = [
  {
    id: 1,
    path: 'hats',
    title: 'hats',
    imageUrl: sectionImages.hats },
  {
    id: 2,
    path: '',
    title: 'jackets',
    imageUrl: sectionImages.jackets,
  },
  {
    id: 3,
    path: '',
    title: 'sneakers',
    imageUrl: sectionImages.sneakers,
  },
  {
    id: 4,
    path: '',
    title: 'women',
    imageUrl: sectionImages.women,
    size: 'large',
  },
  {
    id: 5,
    path: '',
    title: 'men',
    imageUrl: sectionImages.men,
    size: 'large',
  },
];

const Directory = () => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

export default Directory;
