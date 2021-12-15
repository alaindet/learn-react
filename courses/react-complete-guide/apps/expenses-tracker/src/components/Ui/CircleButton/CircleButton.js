import classnames from 'classnames';

import './CircleButton.css';

export const CircleButtonSizes = {
  small: '--size-small',
  medium: '--size-medium',
  large: '--size-large',
};

export const CircleButton = ({
  children,
  type,
  size,
  ...theRest
}) => {
  type = type ?? 'button';
  const cssClasses = ['ui-circle-button'];
  const cssStyle = {};

  if (!size) {
    cssClasses.push(CircleButtonSizes.medium);
  }

  if (!CircleButtonSizes[size]) {
    cssStyle.width = size;
    cssStyle.height = size;
    cssStyle.fontSize = `calc( ${size} * 0.875 )`;
  }

  else {
    cssClasses.push(CircleButtonSizes[size]);
  }

  return (
    <button style={cssStyle} className={classnames(cssClasses)} type={type} {...theRest}>
      {children}
    </button>
  );
};
