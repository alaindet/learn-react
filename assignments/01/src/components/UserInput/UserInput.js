import React from 'react';

const style = {
  main: {
    backgroundColor: '#efefef',
    padding: '1rem',
    margin: '.5rem',
    borderRadius: '.5rem'
  },
  label: {
    fontSize: '1.1rem',
    marginRight: '1rem'
  },
  input: {
    fontSize: '1.1rem',
    padding: '.5rem',
    borderRadius: '.5rem',
    border: 'none'
  }
};

const userInput = (props) => (
  <div
    style={style.main}
  >

    {/* The label */}
    <label
      style={style.label}
    >
      Username
    </label>

    {/* The input */}
    <input
      type="text"
      onChange={props.changeHandler}
      value={props.username}
      style={style.input}
    />

  </div>
);

export default userInput;
