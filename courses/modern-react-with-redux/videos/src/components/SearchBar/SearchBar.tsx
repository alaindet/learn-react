import React from 'react';

import Props from './Props.interface';
import State from './State.interface';
import './SearchBar.css';

export default class SearchBar extends React.Component<Props, State> {
  render() {
    return (
      <div className="search-bar">
        Search Bar
      </div>
    );
  }
}
