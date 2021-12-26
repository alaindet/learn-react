import { PlayerColor } from '../types';

export const PLAYER_COLORS = Object
  .keys(PlayerColor)
  .map(color => color.toLowerCase() as PlayerColor);
