import React from 'react';
import './Text.css';

const text = (props) => {
  return (
    <input
      className="Text"
      value={props.value}
      onChange={props.changeHandler}
    />
  );
};

export default text;
