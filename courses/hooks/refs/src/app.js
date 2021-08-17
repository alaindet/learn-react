import React from 'react';

// import { FormWithBasicRefs } from './components/form-with-basic-refs';
import { FormWithInputComponents } from './components/form-with-input-components';
import './app.css';

export const App = () => {

  return (
    <div className="app">
      <h1>useRef example</h1>

      {/* <h2>Form with basic refs</h2>
      <FormWithBasicRefs /> */}

      <h2>Form with &lt;InputText&gt; components</h2>
      <FormWithInputComponents />

    </div>
  );
}
