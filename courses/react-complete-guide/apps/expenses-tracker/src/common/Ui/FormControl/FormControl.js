import classNames from 'classnames';

import './FormControl.css';

export const FormControl = ({
  children,
  className,
  ...theRest
}) => {
  const cssClasses = [
    'ui-form-control',
    className,
  ];

  return (
    <div className={classNames(cssClasses)} {...theRest}>
      {children}
    </div>
  );
};
