import classnames from 'classnames';

import './Button.css';

export const Button = ({
  type, // 'button' | 'submit'
  size, // 'small' | 'medium' | 'large'
  fill, // 'outline' | 'solid'
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
  ];

  return (
    <button type={type} className={classnames(cssClasses)} {...theRest}>
      {children}
    </button>
  );
};
