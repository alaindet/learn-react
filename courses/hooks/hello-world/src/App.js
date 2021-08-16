import React from 'react';

import { People } from './components';
import './App.scss';

const PEOPLE = [
  { name: 'Alice', age: 10 },
  { name: 'Bob', age: 20 },
  { name: 'Charlotte', age: 30 },
  { somethingElse: true },
];

function App() {

  const [counter, setCounter] = React.useState(0);
  const [people, setPeople] = React.useState(PEOPLE);

  const decrementCounter = () => setCounter(counter + 1);
  const incrementCounter = () => setCounter(counter + 1);

  return (
    <div className="app">

      <div className="people">
        <h1>People</h1>
        <People people={people} />
      </div>

      <div className="counter">
        <span>{counter}</span>
        <button onClick={decrementCounter}>-1</button>
        <button onClick={incrementCounter}>+1</button>
      </div>

    </div>
  );
}

export default App;
