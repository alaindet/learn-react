import classNames from 'classnames';

import './Button.css';

export const Button = ({
  type, // 'button' | 'submit'
  size, // 'small' | 'medium' | 'large'
  fill, // 'outline' | 'solid'
  className,
  isDisabled,
  children,
  ...theRest
}) => {
  type = type ?? 'button';
  size = size ?? 'medium';
  fill = fill ?? 'outline';
  isDisabled = isDisabled ?? false;

  const cssClasses = [
    'ui-button',
    `--size-${size}`,
    `--fill-${fill}`,
    isDisabled ? '--disabled' : null,
    className,
  ];

  return (
    <button type={type} className={classNames(cssClasses)} {...theRest}>
      {children}
    </button>
  );
};
