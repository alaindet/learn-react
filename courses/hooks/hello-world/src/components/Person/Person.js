import React from 'react';

import './Person.scss';

export const Person = props => {

  if (!props?.name || !props?.age) {
    return (
      <li className="person">
        No valid person data provided
      </li>
    );
  }

  return (
    <li className="person" style={props?.style ?? null}>
      {props.name}, {props.age}
    </li>
  );
};