import { FunctionComponent } from 'react';
import classNames from 'classnames';

import './Button.scss';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large' | 'larger';
  fullWidth?: boolean;
  fill?: 'solid' | 'outline';
  type?: 'button' | 'submit';
  className?: string;
  isDisabled?: boolean;
  onClick?: Function;
  [other: string]: any;
}

export const Button: FunctionComponent<ButtonProps> = ({
  size,
  fill,
  type,
  children,
  fullWidth,
  isDisabled,
  className,
  onClick,
  props
}) => {
  size = size ?? 'medium';
  type = type ?? 'button';
  fullWidth = fullWidth ?? false;
  isDisabled = isDisabled ?? false;
  fill = fill ?? 'solid';

  const cssClasses = [
    'ui-button',
    `--size-${size}`,
    `--fill-${fill}`,
    isDisabled ? '--disabled' : null,
    fullWidth ? '--full-width' : null,
    className ?? null,
  ];

  return (
    <button
      type={type}
      className={classNames(cssClasses)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
