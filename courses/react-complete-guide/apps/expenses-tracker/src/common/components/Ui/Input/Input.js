import classNames from 'classnames';

import './Input.css';

export const Input = ({
  type,
  size, // 'medium' | 'large'
  fullWidth,
  className,
  ...props
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
      className={classNames(cssClasses)}
      type={type}
      {...props}
    />
  );
};
