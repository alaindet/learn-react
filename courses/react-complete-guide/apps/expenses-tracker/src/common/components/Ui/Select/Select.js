import classNames from 'classnames';

import './Select.css';

export const Select = ({
  size, // 'medium' | 'large'
  fullWidth,
  className,
  options,
  ...props
}) => {
  const cssClasses = [
    'ui-select',
    `--size-${size}`,
    fullWidth ? '--full-width' : '',
    className,
  ];

  return (
    <select
      className={classNames(cssClasses)}
      {...props}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
