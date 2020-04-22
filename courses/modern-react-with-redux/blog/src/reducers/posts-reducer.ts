import { ACTIONS } from 'actions';
import Post from 'types/post.interface';

export default (state = [], action: any): Post[] => {
  switch (action.type) {

    case ACTIONS.FETCH_POSTS:
      return action.payload;

    default:
      return state;
  }
};
