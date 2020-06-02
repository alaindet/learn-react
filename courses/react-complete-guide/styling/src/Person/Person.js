import React, { useState } from 'react';
import './Person.css';

const Person = ({
  data,
  remove,
  edit,
  children,
}) => {

  const [name, setName] = useState(data.name);
  const [isEditing, setIsEditing] = useState(false);
  const [actionLabel, setActionLabel] = useState('Edit');

  const toggleEditing = () => {
    if (isEditing) {
      setIsEditing(false);
      setActionLabel('Edit');
      edit(data.id, { ...data, name });
    } else {
      setIsEditing(true);
      setActionLabel('Save');
    }
  };

  const onInputChange = (event) => {
    setName(event.target.value);
  };

  const onInputKeyDown = (event) => {
    if (event.keyCode === 13) {
      onInputChange(event);
      toggleEditing();
    }
  };

  return (
    <div className="Person">

      {/* Person's generalities */}
      <ul className="generalities">
        <li><strong>Name:</strong> {data.name}</li>
        <li><strong>Age:</strong> {data.age}</li>
      </ul>

      {/* Injected content */}
      <div className="children">{children}</div>

      {/* Actions */}
      <div className="actions">
        <button className="remove" onClick={() => remove(data.id)}>Remove</button>
        <button className={actionLabel.toLowerCase()} onClick={toggleEditing}>{actionLabel}</button>
      </div>

      {/* Editing */}
      {isEditing &&
        <input
          className="name-input"
          type="text"
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
          value={name}
        />
      }
    </div>
  );
};

export default Person;
