import React, { Component } from 'react'

import './directory.style.scss';
import sectionImages from '../../core/data/section-images';
import MenuItem from '../menu-item/menu-item-component';

class Directory extends Component {

  state = {
    sections: [
      { id: 1, title: 'hats', imageUrl: sectionImages.hats },
      { id: 2, title: 'jackets', imageUrl: sectionImages.jackets },
      { id: 3, title: 'sneakers', imageUrl: sectionImages.sneakers },
      { id: 4, title: 'women', imageUrl: sectionImages.women, size: 'large' },
      { id: 5, title: 'men', imageUrl: sectionImages.men, size: 'large' },
    ],
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, title, imageUrl, size }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default Directory;
