import React from 'react';
import './Person.css';

const person = (props) => {

  const classNames = ['Person'];
  if (props.changeHandler) classNames.push('changeable');
  const className = classNames.join(' ');

  return (
    <div className={className}>
      <p>
        I'm <span className="name">{props.name}</span> and I'm {props.age} years old.
      </p>

      {props.changeHandler &&
        <p>
          <input
            type="text"
            onChange={props.changeHandler}
            value={props.name}
          />
        </p>
      }

      {/* Delete */}
      <button
        className="Person-delete"
        onClick={props.deleteHandler}
      >
        Delete
      </button>

      {/* Nested content (children) */}
      {props.children && <p>{props.children}</p>}
    </div>
  );
};

export default person;
