import React from 'react';

import { InputText } from '../input-text';
import './form-with-input-components.css';

export const FormWithInputComponents = () => {

  const firstNameRef = React.useRef(null);
  const lastNameRef = React.useRef(null);

  const onFormSubmit = event => {
    event.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const data = { firstName, lastName};
    console.log(data);
  };

  React.useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  return (
    <form className="form" onSubmit={onFormSubmit}>

      <label htmlFor="firstname">
        <span>First name</span>
        <InputText ref={firstNameRef} />
      </label>

      <label htmlFor="lastname">
        <span>Last name</span>
        <InputText ref={lastNameRef} />
      </label>

      <button type="submit">
        Submit
      </button>

    </form>
  );
};
