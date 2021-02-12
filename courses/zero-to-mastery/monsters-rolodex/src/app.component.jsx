import React, { Component } from 'react';

import './app.style.css';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {

  title = process.env.REACT_APP_NAME;
  api = process.env.REACT_APP_API_URL;
  state = {
    monsters: [],
    filteredMonsters: [],
    query: '',
  };

  async componentDidMount() {
    const url = `${this.api}/users`;
    const response = await fetch(url);
    const monsters = await response.json();
    const filteredMonsters = monsters;
    this.setState({ monsters, filteredMonsters });
  }

  filterMonsters(query) {
    const filteredMonsters = this.state.monsters
      .filter(m => m.name.toLowerCase().includes(query));
    this.setState({ filteredMonsters });
  }

  onMonsterSearch(event) {
    const query = event.target.value;
    this.setState({ query });
    this.filterMonsters(query);
  };

  render() {
    return (
      <div className="app">
        <header>
          <h1>{this.title}</h1>
          <SearchBox
            value={this.state.query}
            onChange={e => this.onMonsterSearch(e)}
            placeholder={'Search monsters...'}
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
