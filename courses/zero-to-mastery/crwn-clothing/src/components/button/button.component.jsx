import React from 'react';

import './button.style.scss';
import { pickClassNames } from '../../utils/pick-classnames.util';

export const Button = ({ children, isSignedWithGoogle, ...otherProps }) => {

  const className = pickClassNames({
    'button': true,
    'google-sign-in': !!isSignedWithGoogle,
  });

  return (
    <button className={className} {...otherProps}>
      {children}
    </button>
  );
};
