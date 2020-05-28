import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    people: [
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
      },
    ],
  };

  onRemovePerson = () => {
    const name = 'Bob'; // TODO
    this.setState({
      people: this.state.people.filter(person => person.name !== name),
    });
  }

  renderPeople() {
    return this.state.people.map((person, i) => (
      <Person name={person.name} age={person.age} key={i}>
        <button onClick={this.onRemovePerson}>Remove</button>
        <ul className="hobbies">
          {person.hobbies.map((hobby, j) => (
            <li className="hobby" key={j}>{hobby}</li>
          ))}
        </ul>
      </Person>
    ));
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        {this.renderPeople()}
      </div>
    );
  }
}

export default App;
