import _ from 'lodash';

import jsonPlaceholder from 'apis/json-placeholder';

export enum ACTIONS {
  FETCH_POSTS,
  FETCH_USER,
}

export const fetchPosts = () => async (dispatch: any) => {

  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: ACTIONS.FETCH_POSTS,
    payload: response.data,
  });
};

export const fetchUser = (id: string) => async (dispatch: any) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({ type: ACTIONS.FETCH_USER, payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch: any, getState: any) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'));
  for (const userId of userIds) {
    dispatch(fetchUser(userId));
  }
};
