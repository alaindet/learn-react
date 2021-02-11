import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    monsters: [
      {
        id: 'frnk',
        name: 'Frankenstein',
      },
      {
        id: 'drac',
        name: 'Dracula',
      },
      {
        id: 'zmbi',
        name: 'Zombie',
      },
    ],
  };

  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Monsters Rolodex</h1>
        </header>
        <main>
          <ul>
            {this.state.monsters.map(monster => (
              <li key={monster.id}>{monster.name}</li>
            ))}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
