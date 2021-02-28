import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import { rootReducer } from './root-reducer';
import { middlewares } from './middlewares';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
