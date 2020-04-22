import { ACTIONS } from 'actions';
import User from 'types/user.interface';

export default (state = [], action: any): User[] => {
  switch (action.type) {

    case ACTIONS.FETCH_USER:
      return [...state, action.payload];

    default:
      return state;
  }
};
