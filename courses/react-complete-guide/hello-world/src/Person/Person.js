import React from 'react';
import './Person.css';

const Person = ({ name, age, children }) => {
  return (
    <div className="person">
      <p>
        I am <span className="name">{name}</span> and I am <span className="age">{age}</span> years old
      </p>
      <div className="children">{children}</div>
    </div>
  );
};

export default Person;
