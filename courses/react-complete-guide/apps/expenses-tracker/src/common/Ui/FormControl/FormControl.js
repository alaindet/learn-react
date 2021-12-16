import classnames from 'classnames';

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
    <div className={classnames(cssClasses)} {...theRest}>
      {children}
    </div>
  );
};
