import { ReactNode } from 'react';

import css from './button.module.css';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  other?: { [prop: string]: any };
}

export function Button({ type = 'button', children, ...other }: ButtonProps) {
  return (
    <button type={type} className={css.button} {...other}>
      {children}
    </button>
  );
}
