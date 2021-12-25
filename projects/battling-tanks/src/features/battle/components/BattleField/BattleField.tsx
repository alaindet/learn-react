import { FunctionComponent } from 'react';
import { Button } from 'src/common/components';
import { AppFeature, PlayerData } from 'src/common/types';

import { BattlingTanksContext, useBattlingTanks } from 'src/context';
import { ActionType } from 'src/store';
import { PlayerBoard } from '../PlayerBoard/PlayerBoard';
import './BattleField.scss';

export interface BattleFieldProps {
  onNavigate: (feature: AppFeature) => void;
}

export const BattleField: FunctionComponent<BattleFieldProps> = ({
  onNavigate,
}) => {
  const { state, dispatch } = useBattlingTanks() as BattlingTanksContext;

  const onNavigateToSelection = () => {
    onNavigate(AppFeature.Selection);
  };

  const onFight = () => {
    dispatch({ type: ActionType.FightStart, payload: null });
    setTimeout(() => {
      dispatch({ type: ActionType.Fight, payload: null });
      dispatch({ type: ActionType.FightEnd, payload: null });
    }, 500);
  };

  if (!state?.attacker || !state?.defender) {
    onNavigateToSelection();
  }

  const defender: PlayerData = state.defender as PlayerData;
  const attacker: PlayerData = state.attacker as PlayerData;
  const tankWidth = '48px';
  const dieWidth = '48px';

  return (
    <div className="battlefield">

      {/* Defender */}
      <div className="battlefield__defender">
        <PlayerBoard
          role="defender"
          color={defender.color}
          tanks={defender.tanksList}
          isRolling={state.isRolling}
          dice={defender.diceList}
          tankWidth={tankWidth}
          dieWidth={dieWidth}
        />
      </div>

      {/* Attacker */}
      <div className="battlefield__attacker">
        <PlayerBoard
          role="attacker"
          color={attacker.color}
          tanks={attacker.tanksList}
          isRolling={state.isRolling}
          dice={attacker.diceList}
          tankWidth={tankWidth}
          dieWidth={dieWidth}
        />
      </div>

      {/* Fight */}
      <div className="battlefield__controls">
        <Button onClick={onFight} fullWidth size="large" className="ya-mb2">
          Fight!
        </Button>
        <Button onClick={onNavigateToSelection} fullWidth size="large" fill="outline">
          Change
        </Button>
      </div>

      {/* {outcome && (
        <BoardArrows
          attackerColor={attackingPlayer.color}
          defenderColor={defendingPlayer.color}
          outcome={outcome}
        />
      )} */}
    </div>
  );
};
