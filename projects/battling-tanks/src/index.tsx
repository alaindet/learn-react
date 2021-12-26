import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import { App } from './App';
import { BattlingTanksProvider } from 'src/context';

ReactDOM.render(
  <React.StrictMode>
    <BattlingTanksProvider>
      <App />
    </BattlingTanksProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
