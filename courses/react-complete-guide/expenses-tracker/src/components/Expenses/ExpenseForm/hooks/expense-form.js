import { useReducer } from 'react';

import { FORM_FIELD } from '../data/form-field';

export const useExpenseForm = (initialState) => {
  const names = Object.keys(FORM_FIELD).map(field => FORM_FIELD[field].name);
  const reducer = (state, action) => {
    return names.includes(action.type)
      ? { ...state, [action.type]: action.value }
      : state;
  };
  return useReducer(reducer, initialState);
};
