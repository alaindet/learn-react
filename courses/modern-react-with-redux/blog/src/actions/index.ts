import jsonPlaceholder from 'apis/json-placeholder';

export enum ACTIONS {
  FETCH_POSTS,
}

export const fetchPosts = () => async (dispatch: any) => {

  const response = await jsonPlaceholder.get('/posts');

  dispatch({
    type: ACTIONS.FETCH_POSTS,
    payload: response,
  });
};
