import { createStore, applyMiddleware } from 'redux';

import { middlewares } from './middlewares';
import { rootReducer } from './root-reducer';

export const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);
