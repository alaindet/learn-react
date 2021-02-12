import React, { Component } from 'react';

import './app.style.css';
import { Search } from './components/search/search.component';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {

  api = 'http://localhost:4242';
  state = {
    monsters: [],
    filteredMonsters: [],
    searchedMonster: '',
  };

  async componentDidMount() {
    const url = `${this.api}/users`;
    const response = await fetch(url);
    const monsters = await response.json();
    const filteredMonsters = monsters;
    this.setState({ monsters, filteredMonsters });
  }

  onMonsterSearch = (event) => {
    const searchedMonster = event.target.value;
    const filteredMonsters = this.state.monsters
      .filter(m => m.name.toLowerCase().includes(searchedMonster));
    this.setState({ searchedMonster, filteredMonsters });
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1>Monsters Rolodex</h1>
          <Search
            value={this.state.searchedMonster}
            onChange={this.onMonsterSearch}
          />
        </header>
        <main>
          <CardList monsters={this.state.filteredMonsters} />
        </main>
      </div>
    );
  }
}

export default App;
