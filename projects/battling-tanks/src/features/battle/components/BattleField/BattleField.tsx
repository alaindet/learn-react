import { FunctionComponent } from 'react';
import { Button } from 'src/common/components';
import { PlayerData } from 'src/common/types';

import { BattlingTanksContext, useBattlingTanks } from 'src/context';
import { PlayerBoard } from '../PlayerBoard/PlayerBoard';
import './BattleField.scss';

export interface BattleFieldProps {
  onChangePlayers: () => void;
}

export const BattleField: FunctionComponent<BattleFieldProps> = ({
  onChangePlayers,
}) => {
  const { state, dispatch } = useBattlingTanks() as BattlingTanksContext;

  const onLogState = () => {
    console.log(state);
  };

  const onFight = () => {

  };

  if (!state?.attacker || !state?.defender) {
    onChangePlayers();
  }

  const defender: PlayerData = state.defender as PlayerData;
  const attacker: PlayerData = state.attacker as PlayerData;

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
          tankWidth="48px"
          dieWidth="48px"
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
          tankWidth="48px"
          dieWidth="48px"
        />
      </div>

      {/* Fight */}
      <div className="battlefield__controls">
        <Button onClick={onFight} fullWidth size="large" className="ya-mb2">
          Fight!
        </Button>
        <Button onClick={onChangePlayers} fullWidth size="large" fill="outline">
          Change settings
        </Button>
      </div>

      {/* {outcome && (
        <BoardArrows
          attackerColor={attackingPlayer.color}
          defenderColor={defendingPlayer.color}
          outcome={outcome}
        />
      )} */}

      {/* TODO */}
      <div>
        <button onClick={onLogState}>Log state</button>
      </div>


    </div>
  );
};
