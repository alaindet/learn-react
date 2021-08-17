import React from 'react';

import './input-text.css';

export const InputText = React.forwardRef(
  (props, ref) => {
    return (
      <input
        type="text"
        ref={ref}
        className="input-text"
        placeholder={props.placeholder}
      />
    );
  }
);
