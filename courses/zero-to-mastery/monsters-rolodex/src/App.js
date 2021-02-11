import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {

  api = 'https://jsonplaceholder.typicode.com';
  state = {
    monsters: [],
  };

  async componentDidMount() {
    const url = `${this.api}/users`;
    const response = await fetch(url);
    const monsters = await response.json();
    this.setState({ monsters });
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>Monsters Rolodex</h1>
        </header>
        <main>
          <CardList monsters={this.state.monsters} />
        </main>
      </div>
    );
  }
}

export default App;
