import React, { useState } from 'react';

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

  const onSaveForm = () => {
    setIsEditing(false);
    edit(data.id, {...data, name, age});
  };

  const onEditForm = () => {
    setIsEditing(true);
  };

  return (
    <PersonStyled>

      {/* Person's generalities */}
      <PersonMetadata>
        <li><strong>Name:</strong> {data.name}</li>
        <li><strong>Age:</strong> {data.age}</li>
      </PersonMetadata>

      {/* Actions */}
      <Actions>
        <RemoveAction onClick={() => remove(data.id)}>
          Remove
        </RemoveAction>

        {isEditing &&
          <SaveAction onClick={onSaveForm}>Save</SaveAction>
        }

        {!isEditing &&
          <EditAction onClick={onEditForm}>Edit</EditAction>
        }
      </Actions>

      {isEditing &&
        'Editing form'
      }
    </PersonStyled>
  );
};

export default Person;
