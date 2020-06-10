import React, { Component } from 'react';

import './App.css';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          Burger Builder
        </Layout>
      </div>
    );
  }
}

export default App;
