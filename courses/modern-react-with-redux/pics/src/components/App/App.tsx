import React from 'react';

import './App.scss';
import SearchBar from '../SearchBar/SearchBar';

export default class App extends React.Component {

  public onSearchSubmit(term: string): void {
    console.log('onSearchSubmit', term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit.bind(this)} />
      </div>
    );
  }
}
