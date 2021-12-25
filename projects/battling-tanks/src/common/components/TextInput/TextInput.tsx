import classNames from 'classnames';
import { FunctionComponent } from 'react';

import './TextInput.scss';

export interface TextInputProps {
  size?: 'small' | 'medium' | 'large' | 'larger';
  fullWidth?: boolean;
  type?: string;
  className?: string;
  [other: string]: any;
}

export const TextInput: FunctionComponent<TextInputProps> = ({
  size,
  fullWidth,
  type,
  className,
  ...props
}) => {
  size = size ?? 'medium';
  type = type ?? 'text';
  fullWidth = fullWidth ?? false;

  const cssClasses = [
    'ui-text-input',
    `--size-${size}`,
    fullWidth ? '--full-width' : null,
    className ?? null,
  ];

  return (
    <input
      type={type}
      className={classNames(cssClasses)}
      {...props}
    />
  );
};
