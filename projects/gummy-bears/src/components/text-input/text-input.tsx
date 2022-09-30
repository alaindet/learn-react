  import { ChangeEventHandler, FocusEventHandler, ForwardedRef, forwardRef } from 'react';

import './text-input.scss';

export interface TextInputProps {
  fullsize?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>; // From react-hook-form
  onBlur: FocusEventHandler<HTMLInputElement>; // From react-hook-form
  name: string; // From react-hook-form
  [prop: string]: any;
}

function TextInputInner(
  {
    fullsize = false,
    name,
    onChange,
    onBlur,
  ...props }: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      type="text"
      className={`text-input ${fullsize ? '-fullsize' : ''}`}
      {...props}
    />
  );
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  TextInputInner
);
