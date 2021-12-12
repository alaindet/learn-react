import React, { useState } from 'react';

import Form from './../Form/Form';
import {
  PersonStyled,
  PersonMetadata,
  Actions,
  RemoveAction,
  EditAction,
  SaveAction,
} from './Person.style';

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
      label: 'Name',
      value: name,
      setter: setName,
    },
    {
      label: 'Age',
      value: age,
      setter: setAge,
    },
  ];

  const onSaveForm = () => {
    setIsEditing(false);
    edit(data.id, {...data, name, age});
  };

  const onDiscardForm = () => {
    setIsEditing(false);
    setName(data.name);
    setAge(data.age);
  };

  const onEditForm = () => {
    setIsEditing(true);
  };

  return (
    <PersonStyled>

      <PersonMetadata>
        <li><strong>Name:</strong> {data.name}</li>
        <li><strong>Age:</strong> {data.age}</li>
      </PersonMetadata>

      <Actions>
        <RemoveAction onClick={() => remove(data.id)}>Remove</RemoveAction>
        {isEditing && <SaveAction onClick={onSaveForm}>Save</SaveAction>}
        {isEditing && <EditAction onClick={onDiscardForm}>Discard</EditAction>}
        {!isEditing && <EditAction onClick={onEditForm}>Edit</EditAction>}
      </Actions>

      {isEditing && <Form fields={fields} />}
      
    </PersonStyled>
  );
};

export default Person;
