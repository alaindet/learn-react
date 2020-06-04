import React, { useState } from 'react';

import { PersonStyled, Generalities, Actions, RemoveAction, EditAction, SaveAction } from './Person.style';
import Form from './../Form/Form';

const Person = ({
  data,
  remove,
  edit,
}) => {

  const [name, setName] = useState(data.name);
  const [age, setAge] = useState(data.age);
  const [isEditing, setIsEditing] = useState(false);

  const fields = [
    {
      value: name,
      setter: setName,
      label: 'Name',
    },
    {
      value: age,
      setter: setAge,
      label: 'Age',
    },
  ];

  const toggleEditing = () => {
    if (isEditing) {
      setIsEditing(false);
      edit(data.id, { ...data, name });
    } else {
      setIsEditing(true);
    }
  };

  return (
    <PersonStyled>

      <Generalities>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Age:</strong> {age}</li>
      </Generalities>

      <Actions>

        <RemoveAction onClick={() => remove(data.id)}>Remove</RemoveAction>

        {isEditing
          ? <SaveAction onClick={toggleEditing}>Save</SaveAction>
          : <EditAction onClick={toggleEditing}>Edit</EditAction>
        }

      </Actions>

      {isEditing && <Form fields={fields} />}

    </PersonStyled>
  );
};

export default Person;
