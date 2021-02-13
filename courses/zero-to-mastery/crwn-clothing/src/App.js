import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home/home.component';
import HatsPage from './pages/hats/hats.component';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </Switch>
  );
};

export default App;
