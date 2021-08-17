import React from 'react';

import './form-with-basic-refs.css';

export const FormWithBasicRefs = () => {

  const nameRef = React.useRef();
  const ageRef = React.useRef();
  const isCoolRef = React.useRef();

  const onFormSubmit = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    const age = ageRef.current.value;
    const isCool = isCoolRef.current.checked;
    const data = { name, age, isCool };
    console.log(data);
  };

  React.useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <form className="form" onSubmit={onFormSubmit}>

      <label htmlFor="name">
        <span>Name</span>
        <input
          ref={nameRef}
          type="text"
          id="name"
        />
      </label>

      <label htmlFor="age">
        <span>Age</span>
        <input
          ref={ageRef}
          type="number"
          id="age"
        />
      </label>

      <label htmlFor="iscool">
        <span>Is cool?</span>
        <input
          ref={isCoolRef}
          type="checkbox"
          id="iscool"
        />
      </label>

      <button type="submit">
        Submit
      </button>

    </form>
  );
}
