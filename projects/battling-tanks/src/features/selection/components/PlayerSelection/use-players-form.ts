import { useReducer } from 'react';
import { PlayerColor } from 'src/common/types';

export interface PlayersForm {
  attackerColor: PlayerColor;
  attackerTanks: number;
  defenderColor: PlayerColor;
  defenderTanks: number;
}

export const usePlayersForm = (initialState: PlayersForm) => {

  const reducer = (state: any, action: any): any => {
    const { type: field, payload: value } = action;
    return { ...state, [field]: value };
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateForm = (field: keyof PlayersForm, value: any): void => {
    dispatch({ type: field, payload: value });
  };

  return [state, updateForm];
};
