import { useReducer } from 'react';

import { PlayersForm } from 'src/common/types';

export const usePlayersForm = (initialState: PlayersForm) => {

  const reducer = (state: any, action: any): any => {
    const { type: field, payload: value } = action;
    return { ...state, [field]: value };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateForm = (field: keyof PlayersForm, value: any): void => {
    dispatch({ type: field, payload: value });
  };

  const logState = () => {
    console.log('FORM VALUE', state);
  };


  return [state, updateForm, logState];
};
