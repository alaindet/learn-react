import classNames from 'classnames';

import './Button.css';

export const Button = ({
  type, // 'button' | 'submit'
  size, // 'small' | 'medium' | 'large'
  fill, // 'outline' | 'solid'
  className,
  children,
  ...theRest
}) => {
  type = type ?? 'button';
  size = size ?? 'medium';
  fill = fill ?? 'outline';

  const cssClasses = [
    'ui-button',
    `--size-${size}`,
    `--fill-${fill}`,
    className,
  ];

  return (
    <button type={type} className={classNames(cssClasses)} {...theRest}>
      {children}
    </button>
  );
};
