import React, { Component } from 'react';

import Person from './components/Person/Person';
import {
  AppStyled,
  AppTitle,
  ButtonLink,
} from './App.style';

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

  render() {
    const showPeople = this.state.showPeople;
    const people = this.state.people;
    return (
      <AppStyled>

        <AppTitle>
          People list
          <ButtonLink onClick={this.onTogglePeopleVisibility}>
            {showPeople ? 'Hide' : 'Show'}
          </ButtonLink>
        </AppTitle>

        {showPeople && people.map(person => (
          <Person
            key={person.id}
            data={person}
            remove={this.onRemovePerson}
            edit={this.onEditPerson}
          />
        ))}

      </AppStyled>
    );
  }
}

export default App;
