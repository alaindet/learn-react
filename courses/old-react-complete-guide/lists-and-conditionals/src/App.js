import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    showPeople: true,
    people: [
      {
        id: 123,
        name: 'Alice',
        age: 10,
        hobbies: ['Gardening', 'Rolling on hills\' sides'],
      },
      {
        id: 456,
        name: 'Bob',
        age: 20,
        hobbies: ['Cooking', 'Riding the lightning'],
      },
      {
        id: 789,
        name: 'Fenchurch',
        age: 30,
        hobbies: ['Reading', 'Listening to music'],
      },
    ],
  };

  onRemovePerson = (id) => {
    this.setState({
      people: this.state.people.filter(person => person.id !== id)
    });
  }

  onEditPerson = (id, newPerson) => {
    this.setState({
      people: this.state.people.map(
        person => person.id === id ? newPerson : person
      )
    });
  }

  onTogglePeopleVisibility = () => {
    this.setState(state => ({ showPeople: !state.showPeople }));
  }

  renderPersonHobbies(person) {
    return (
      <ul className="hobbies">
        {person.hobbies.map((hobby, index) => (
          <li className="hobby" key={index}>{hobby}</li>
        ))}
      </ul>
    );
  }

  renderPeople() {
    return this.state.people.map(person => (
      <Person
        key={person.id}
        data={person}
        remove={this.onRemovePerson}
        edit={this.onEditPerson}
      >
        {this.renderPersonHobbies(person)}
      </Person>
    ));
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">
          People list
          <button
            className="button-link"
            onClick={this.onTogglePeopleVisibility}
          >
            {this.state.showPeople ? 'Hide' : 'Show'}
          </button>
        </h1>
        {this.state.showPeople && this.renderPeople()}
      </div>
    );
  }
}

export default App;
