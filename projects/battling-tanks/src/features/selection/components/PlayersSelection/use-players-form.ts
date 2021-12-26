import { useReducer } from 'react';

import { PlayersForm } from 'src/common/types';

export const usePlayersForm = (initialState: PlayersForm) => {

  const reducer = (state: any, action: any): any => {
    const { type: field, payload: value } = action;
    return { ...state, [field]: value };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateForm = <T = any>(field: keyof PlayersForm, value: T): void => {
    dispatch({ type: field, payload: value });
  };

  return [state, updateForm];
};
