import { PlayersForm } from 'src/common/types';
import { Action, ActionType } from '../types';

export const setPlayers = (payload: PlayersForm): Action<PlayersForm> => {
  return { type: ActionType.SetPlayers, payload };
};
