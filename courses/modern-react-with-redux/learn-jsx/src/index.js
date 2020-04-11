import React from 'react';
import ReactDOM from 'react-dom';

const getButtonText = () => 'Submit';

const MyForm = () => {

  const style = {
    all: {
      fontFamily: 'Trebuchet MS',
    },
    label: {
      margin: '0 0.5rem',
    },
    input: {
      margin: '0 0.5rem',
      padding: '0.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '0.5rem',
    },
    button: {
      backgroundColor: '#008',
      color: 'white',
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '0.5rem',
    }
  };

  return (
    <div style={style.all}>
      <label style={style.label} htmlFor="name">Enter name:</label>
      <input style={style.input} id="name" type="text" />
      <button style={style.button} type="submit">
        {getButtonText()}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <MyForm />
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
