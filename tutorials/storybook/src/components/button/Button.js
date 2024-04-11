import React from 'react';
import './Button.css';

export function Button({
  variant,
  children,
  otherProps,
}) {
  return (
    <button
      className={`button ${variant}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}
