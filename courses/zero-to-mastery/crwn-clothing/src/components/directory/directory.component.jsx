import React from 'react'

import './directory.style.scss';
import { sections } from '../../core/data/sections.data';
import MenuItem from '../menu-item/menu-item-component';

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
