import { PlayerRole } from 'src/common/types';

export const getOppositePlayerRole = (role: PlayerRole): PlayerRole => {
  return role === 'attacker' ? 'defender' : 'attacker';
};
