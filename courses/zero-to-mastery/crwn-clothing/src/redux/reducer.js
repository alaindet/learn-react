import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';

export const reducers = combineReducers({
  user: userReducer,
});
