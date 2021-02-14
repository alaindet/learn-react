import React from 'react';

import './button.style.scss';

export const Button = ({ children, ...otherProps }) => {
  return (
    <button className="button" {...otherProps}>
      {children}
    </button>
  );
};
