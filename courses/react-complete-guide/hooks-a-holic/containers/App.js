import React from 'react';

import LightbulbClass from './../components/LightbulbClass';
import LightbulbFunction from './../components/LightbulbFunction';

class App extends React.Component {

  render() {
    return (
      <>
        <LightbulbFunction />
        <LightbulbClass />
      </>
    );
  }
}

export default App;
