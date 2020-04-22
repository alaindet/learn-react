import { combineReducers } from 'redux';

import postsReducer from 'reducers/posts-reducer';
import usersReducer from 'reducers/users-reducer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});
