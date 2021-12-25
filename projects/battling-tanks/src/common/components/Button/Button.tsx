import { FunctionComponent } from 'react';
import classNames from 'classnames';

import './Button.scss';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large' | 'larger';
  fullWidth?: boolean;
  fill?: 'solid' | 'outline';
  type?: 'button' | 'submit';
  className?: string;
  onClick?: Function;
  [other: string]: any;
}

export const Button: FunctionComponent<ButtonProps> = ({
  size,
  fill,
  type,
  children,
  fullWidth,
  className,
  onClick,
  theRest
}) => {
  size = size ?? 'medium';
  type = type ?? 'button';
  fullWidth = fullWidth ?? false;
  fill = fill ?? 'solid';

  const cssClasses = [
    'ui-button',
    `--size-${size}`,
    `--fill-${fill}`,
    fullWidth ? '--full-width' : null,
    className ?? null,
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
