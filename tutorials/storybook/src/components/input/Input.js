import React from 'react';
import './Input.css';

export function Input({
  size = 'medium',
  placeholder = '...',
}) {
  return (
    <input
      className={`input --size-${size}`}
      placeholder={placeholder}
      type="text"
    />
  );
}
