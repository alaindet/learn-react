import React from 'react';
import './Person.css';

const Person = ({
  data,
  click,
  change,
  children,
}) => {
  return (
    <div className="person">
      <p>
        I am <span className="name">{data.name}</span> and I am <span className="age">{data.age}</span> years old
      </p>
      <div className="children">{children}</div>
      <div className="remove" onClick={() => click(data.name)}>
        Remove
      </div>
      <input
        type="text"
        onChange={(event) => change(event, data.id)} value={data.name}
      />
    </div>
  );
};

export default Person;
