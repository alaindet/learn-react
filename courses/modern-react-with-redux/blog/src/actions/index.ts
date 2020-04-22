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

export const fetchUser = (id: string) => (dispatch: any) => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(
  async (id: string, dispatch: any ) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: ACTIONS.FETCH_USER, payload: response.data });
  }
);
