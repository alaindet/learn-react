import React, { Component } from 'react';
import './App.css';
import Person from './components/Person/Person';

class App extends Component {

  state = {
    people: [
      { id: 'custom-1', name: 'Alice', age: 10 },
      { id: 'custom-2', name: 'Bob', age: 20, changeable: true },
      { id: 'custom-3', name: 'Carl', age: 30 }
    ],
    showPeople: false
  };

  showPeopleHandler = () => this.setState(prev => ({
    showPeople: !prev.showPeople
  }));

  deletePersonHandler = (customId) => {
    const people = [...this.state.people];
    const index = people.findIndex(person => person.id === customId);
    people.splice(index, 1);
    this.setState({ people });
  };

  changeNameHandler = (customId, event) => {
    const people = [...this.state.people];
    const index = people.findIndex(person => person.id === customId);
    people[index].name = event.target.value;
    this.setState({ people });
  };

  render = () => {

    let counter = (
      <p>There are <strong>{this.state.people.length}</strong> people.</p>
    );

    let button = (
      <button
        className="App-button"
        onClick={this.showPeopleHandler}
      >
        {this.state.showPeople ? 'Hide' : 'Show'} people
      </button>
    );

    let people = !this.state.showPeople ? null : (
      <div>
        {this.state.people.map((person, index) => (
          <Person
            key={`person#${index}`}
            name={person.name}
            age={person.age}
            deleteHandler={
              this.deletePersonHandler.bind(this, person.id)
            }
            changeHandler={
              person.changeable
                ? this.changeNameHandler.bind(this, person.id)
                : undefined
            }
          />
        ))}
      </div>
    );

    return (
      <div className="App">
        <h1>My first React app...</h1>
        {counter}
        {button}
        {people}
      </div>
    );
  }
}

export default App;
