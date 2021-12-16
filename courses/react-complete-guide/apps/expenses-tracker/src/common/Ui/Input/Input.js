import classnames from 'classnames';

import './Input.css';

export const Input = ({
  type,
  size, // 'medium' | 'large'
  fullWidth,
  className,
  ...theRest
}) => {
  type = type ?? 'text';
  size = size ?? 'medium';

  const cssClasses = [
    'ui-input',
    `--size-${size}`,
    fullWidth ? '--full-width' : '',
    className,
  ];

  return (
    <input
      className={classnames(cssClasses)}
      type={type}
      {...theRest}
    />
  );
};
