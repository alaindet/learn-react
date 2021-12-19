import classNames from 'classnames';
import { FunctionComponent } from 'react';

import './Button.scss';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large' | 'larger';
  fullWidth?: boolean;
  type?: 'button' | 'submit';
  [other: string]: any;
  onClick?: Function;
}

export const Button: FunctionComponent<ButtonProps> = ({
  size,
  type,
  children,
  fullWidth,
  onClick,
  theRest
}) => {
  size = size ?? 'medium';
  type = type ?? 'button';
  fullWidth = fullWidth ?? false;

  const cssClasses = [
    'ui-button',
    `--size-${size}`,
    fullWidth ? '--full-width' : null,
  ];

  return (
    <button
      type={type}
      className={classNames(cssClasses)}
      onClick={onClick}
      {...theRest}
    >
      {children}
    </button>
  );
};
