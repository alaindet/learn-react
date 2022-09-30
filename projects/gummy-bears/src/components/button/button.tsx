import { ForwardedRef, forwardRef, memo, ReactNode } from 'react';

import './button.scss';

export interface ButtonInnerProps {
  type?: 'button' | 'submit';
  color?: 'primary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  isDisabled?: boolean;
  className?: string;
  children?: ReactNode;
  [other: string]: any;
}

function ButtonInner({
  type = 'button',
  color = 'primary',
  size = 'medium',
  isDisabled = false,
  className = '',
  children,
  ...props
}: ButtonInnerProps, ref: ForwardedRef<HTMLButtonElement>) {
  
  const cssClasses = [
    'button',
    `-color-${color}`,
    `-size-${size}`,
    isDisabled ? '-disabled' : '',
    className,
  ].join(' ').trim();

  return (
    <button ref={ref} type={type} className={cssClasses} {...props}>
      {children}
    </button>
  );
}

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonInnerProps>(
    ButtonInner
  )
);
