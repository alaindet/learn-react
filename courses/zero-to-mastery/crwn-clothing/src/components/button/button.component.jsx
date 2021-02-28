import React from 'react';

import './button.style.scss';
import { pickClassNames } from '../../utils/pick-classnames.util';

export const Button = ({
  children,
  color,
  outline,
  ...otherProps
}) => {

  const className = pickClassNames({
    'button': true,
    'style-outline': outline,
    'style-filled': !outline,
    'color-default': !color,
    'color-google': color === 'google',
  });

  return (
    <button className={className} {...otherProps}>
      {children}
    </button>
  );
};
