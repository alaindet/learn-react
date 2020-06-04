import React, { Component } from 'react';

import { AppStyled, AppTitle, ButtonLink } from './App.style.js';
import People from './../../components/People/People';

class App extends Component {

  state = {
    showPeople: true,
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

  onTogglePeopleVisibility = () => {
    this.setState(state => ({ showPeople: !state.showPeople }));
  }

  render() {
    return (
      <AppStyled>

        <AppTitle>
          People list
          <ButtonLink onClick={this.onTogglePeopleVisibility}>
            {this.state.showPeople ? 'Hide' : 'Show'}
          </ButtonLink>
        </AppTitle>

        {this.state.showPeople &&
          <People
            people={this.state.people}
            edit={this.onEditPerson}
            remove={this.onRemovePerson}
          />
        }

      </AppStyled>
    );
  }
}

export default App;
