import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    showPeople: false,
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

  onChangePersonName = (event) => {
    const name = event.target.value;
    console.log('onChangePersonName', name);
  }

  onTogglePeople = () => {
    this.setState(state => ({ showPeople: !state.showPeople }));
  }

  renderPersonHobbies(person) {
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
        change={this.onChangePersonName}
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
          <button className="button-link" onClick={this.onTogglePeople}>
            {this.state.showPeople ? 'Hide' : 'Show'}
          </button>
        </h1>
        {this.state.showPeople ? this.renderPeople() : null}
      </div>
    );
  }
}

export default App;
