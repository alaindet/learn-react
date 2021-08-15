import React from 'react';

export const makeGreen = BaseComponent => props => {

  const addGreen = {
    style: {
      color: 'green',
    }
  };

  const newProps = {...props, ...addGreen};

  return <BaseComponent {...newProps} />;
}; 