import { combineReducers } from 'redux';

import postsReducer from 'reducers/posts-reducer';
import State from 'types/state.interface';

export default combineReducers({
  posts: postsReducer,
});
