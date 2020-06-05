import React from 'react';

import LightbulbClass from './../components/LightbulbClass';
import LightbulbFunction from './../components/LightbulbFunction';
import { Container } from './../theme/theme';

class App extends React.Component {

  render() {
    return (
      <Container>
        <h1>Hooks-a-holic</h1>
        <LightbulbFunction />
        <LightbulbClass />
        <p>Open the console to see class <em>lifecycle hooks</em> and <em>React hooks</em> firing</p>
      </Container>
    );
  }
}

export default App;
