import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app';
import { GummyBearsContextProvider } from './contexts';
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GummyBearsContextProvider>
      <App />
    </GummyBearsContextProvider>
  </React.StrictMode>
)
