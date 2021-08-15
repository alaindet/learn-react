import React from 'react';

export const removeInlineStyle = BaseComponent => props => {
  const { style, ...newProps } = props;
  return <BaseComponent {...newProps} />;
}; 