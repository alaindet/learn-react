import React, { Component } from 'react';

import { AppStyled } from './App.style.js';
import People from './../../components/People/People';
import Dashboard from './../../components/Dashboard/Dashboard';

class App extends Component {

  state = {
    people: [
      {
        id: 123,
        name: 'Alice',
        age: 10,
      },
      {
        id: 456,
        name: 'Bob',
        age: 20,
      },
      {
        id: 789,
        name: 'Fenchurch',
        age: 30,
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

  render() {
    return (
      <AppStyled>

        <h1>People list</h1>

        <Dashboard />

        <People
          people={this.state.people}
          edit={this.onEditPerson}
          remove={this.onRemovePerson}
        />

      </AppStyled>
    );
  }
}

export default App;
