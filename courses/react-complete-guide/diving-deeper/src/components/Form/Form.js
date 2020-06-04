import React from 'react';

import { FormGroup, FormLabel, FormStyled, TextField } from './Form.style';

const Form = ({ fields }) => (
  <FormStyled>
    {fields.map((field, index) => (
      <FormGroup key={index}>
        <FormLabel>{field.label}</FormLabel>
        <TextField
          type="text"
          onChange={(e) => field.setter(e.target.value)}
          value={field.value}
        />
      </FormGroup>
    ))}
  </FormStyled>
);

export default Form;
