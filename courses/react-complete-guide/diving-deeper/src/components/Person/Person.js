import React, { useState } from 'react';

import { PersonStyled, Generalities, Actions } from './Person.style';
import { DangerButton, WarningButton, SuccessButton } from './../../theme/button';
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

  const onSaveForm = () => {
    setIsEditing(false);
    edit(data.id, { ...data, name, age });
  };

  const onDiscardForm = () => {
    setIsEditing(false);
    setName(data.name);
    setAge(data.age);
  };

  const onActivateForm = () => {
    setIsEditing(true);
  };

  return (
    <PersonStyled>

      <Generalities>
        <li><strong>Name:</strong> {data.name}</li>
        <li><strong>Age:</strong> {data.age}</li>
      </Generalities>

      <Actions>
        <DangerButton onClick={() => remove(data.id)}>Remove</DangerButton>
        {isEditing && <SuccessButton onClick={onSaveForm}>Save</SuccessButton>}
        {isEditing && <WarningButton onClick={onDiscardForm}>Discard</WarningButton>}
        {!isEditing && <WarningButton onClick={onActivateForm}>Edit</WarningButton>}
      </Actions>

      {isEditing && <Form fields={fields} />}

    </PersonStyled>
  );
};

export default Person;
