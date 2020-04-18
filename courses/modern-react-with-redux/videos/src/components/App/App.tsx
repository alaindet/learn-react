import React from 'react';

import Props from 'components/App/Props.interface';
import State from 'components/App/State.interface';
import 'components/App/App.css';
import SearchBar from 'components/SearchBar/SearchBar';

export default class App extends React.Component<Props, State> {
  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}
