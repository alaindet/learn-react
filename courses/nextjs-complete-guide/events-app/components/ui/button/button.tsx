import { ReactNode } from 'react';

import css from './button.module.css';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick: () => void;
  children: ReactNode;
  otherProps: { [prop: string]: any };
}

export function Button({
  type = 'button',
  onClick,
  children,
  ...otherProps
}: ButtonProps) {

  return (
    <button
      type={type}
      onClick={onClick}
      className={css.button}
      {...otherProps}
    >
      {children}
    </button>
  );
}
