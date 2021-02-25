import { createStore, applyMiddleware } from 'redux';

import { middlewares } from './middlewares';
import { reducers } from './reducer';

export const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);
