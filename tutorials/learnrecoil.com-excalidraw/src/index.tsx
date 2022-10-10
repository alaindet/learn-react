import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Atoms } from './examples/atoms/atoms';
import { Selectors } from './examples/selectors/selectors';
import { Canvas } from './Canvas';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider>
        <Router>
          <Switch>

            <Route path="/examples/atoms">
              <Atoms />
            </Route>

            <Route path="/examples/selectors">
              <Selectors />
            </Route>

            <Route>
              <Canvas />
            </Route>

          </Switch>
        </Router>
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
)
