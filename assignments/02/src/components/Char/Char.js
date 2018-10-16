import React from 'react';
import './Char.css';

const char = (props) => {
  return (
    <div
      className="Char"
      onClick={props.clickHandler}
    >
      {props.value}
    </div>
  );
};

export default char;
