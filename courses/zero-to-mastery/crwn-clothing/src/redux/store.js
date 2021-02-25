import { createStore, applyMiddleware } from 'redux';

import { middlewares } from './middlewares';
import { rootReducer } from './reducer';

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);
