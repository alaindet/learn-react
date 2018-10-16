import React from 'react';
import CharComponent from './../Char/Char';
import './Chars.css';

const chars = (props) => {
  return !props.chars ? null : (
    <div className="Chars">
      {props.chars.map((char, index) => (
        <CharComponent
          key={index}
          value={char}
          clickHandler={props.clickHandler.bind(index)}
        />
      ))}
    </div>
  );
};

export default chars;
