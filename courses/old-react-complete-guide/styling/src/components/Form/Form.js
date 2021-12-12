import React from 'react';

import {
  FormStyled,
  FormGroup,
  FormLabel,
  TextField,
} from './Form.style';

const Form = ({ fields }) => {
  return (
    <FormStyled>
      {fields.map(field => (
        <FormGroup key={field.label}>
          <FormLabel>{field.label}</FormLabel>
          <TextField
            type="text"
            value={field.value}
            onChange={(event) => field.setter(event.target.value)}
          ></TextField>
        </FormGroup>
      ))}
    </FormStyled>
  );
};

export default Form;
