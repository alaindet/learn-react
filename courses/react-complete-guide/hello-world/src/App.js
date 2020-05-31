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

  onRemovePerson = (name) => {
    this.setState({
      people: this.state.people.filter(
        person => person.name !== name
      )
    });
  }

  renderPerson(person) {
    return (
      <ul className="hobbies">
        {person.hobbies.map((hobby, j) => (
          <li className="hobby" key={j}>{hobby}</li>
        ))}
      </ul>
    );
  }

  renderPeople() {
    return this.state.people.map((person, i) => (
      <Person
        key={i}
        age={person.age}
        name={person.name}
        click={this.onRemovePerson}
      >
        {this.renderPerson(person)}
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
