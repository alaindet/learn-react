import React from 'react';
import './Validation.css';

const validation = (props) => {

  let [error, message] = [0, null];
  if (props.value < props.min) [error, message] = [1, 'Text too short'];
  if (props.value > props.max) [error, message] = [1, 'Text too long'];

  const className = ['Validation']
    .concat([error ? 'no' : 'yes'])
    .join(' ');

  return (
    <p className={className}>
      Characters: {props.value}
      <div>{message}</div>
    </p>
  );
};

export default validation;
