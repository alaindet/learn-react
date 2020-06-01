import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => {

  const [peopleState, setPeopleState] = useState([
    {
      name: 'Alice',
      age: 10,
      hobbies: ['Gardening', 'Rolling on hills\' sides'],
    },
    {
      name: 'Bob',
      age: 20,
      hobbies: ['Cooking', 'Riding the lightning'],
    },
    {
      name: 'Fenchurch',
      age: 30,
      hobbies: ['Reading', 'Listening to music'],
    }
  ]);

  const [fooState, setFooState] = useState('I am a foo string');

  const onRemovePerson = () => {
    const name = 'Bob'; // TODO
    setPeopleState(peopleState.filter(person => person.name !== name));

    // Please note setPeopleState() does not alter fooState
    console.log(fooState, peopleState);
  };

  const renderPeople = (people) => {
    return people.map((person, i) => (
      <Person name={person.name} age={person.age} key={i}>
        <button onClick={onRemovePerson}>Remove</button>
        <ul className="hobbies">
          {person.hobbies.map((hobby, j) => (
            <li className="hobby" key={j}>{hobby}</li>
          ))}
        </ul>
      </Person>
    ));
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      {renderPeople(peopleState)}
    </div>
  );
};

export default App;
