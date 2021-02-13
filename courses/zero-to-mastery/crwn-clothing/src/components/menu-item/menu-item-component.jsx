import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.scss';

const MenuItem = ({
  title,
  imageUrl,
  size,
  path,
  // From withRouter
  history,
  match,
}) => {

  const backgroundImage = `url(${imageUrl})`;
  const sizeClass = size ? `size-${size}` : '';

  return (
    <div
      className={`menu-item ${sizeClass}`}
      onClick={() => history.push(`${match.url}${path}`)}
    >
      <div className="background-image" style={{ backgroundImage }}></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
