import React from 'react'

import './directory.style.scss';
import { SECTIONS } from '../../core/data/sections.data';
import { MenuItem } from '../menu-item/menu-item-component';

export const Directory = () => {
  return (
    <div className="directory-menu">
      {SECTIONS.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};
