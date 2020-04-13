import React from 'react';

import './App.scss';
import SearchBar from '../SearchBar/SearchBar';

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar />
    </div>
  );
}

export default App;
