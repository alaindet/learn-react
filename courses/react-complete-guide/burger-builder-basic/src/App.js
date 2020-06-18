import React, { Component } from 'react';

import { AppContainer } from 'App.style';
import Layout from 'containers/Layout/Layout';
import BurgerBuilder from 'containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </AppContainer>
    );
  }
}

export default App;
