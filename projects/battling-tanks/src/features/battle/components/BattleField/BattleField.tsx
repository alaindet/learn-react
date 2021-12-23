import { FunctionComponent } from 'react';

import { BattlingTanksContext, useBattlingTanks } from 'src/context';
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

  return (
    <div className="battlefield">

      <div className="battlefield__attacker">
        Attacker slot
      </div>

      <div className="battlefield__defender">
        Defender slot
      </div>

      <div className="battlefield__controls">
        <button onClick={onChangePlayers}>Change Players</button>
        <button onClick={onLogState}>Log state</button>
      </div>

      {/* {state.defender && (
        <PlayerBoard
          role={state.defender.role}
          color={state.defender.color}
          tanks={state.defender.tanksList}
          isRolling={state.isRolling}
          dice={state.defender.diceList}
        />
      )} */}

      {/* {state.attacker && (
        <PlayerBoard
          role={state.attacker.role}
          color={state.attacker.color}
          tanks={state.attacker.tanksList}
          isRolling={state.isRolling}
          dice={state.attacker.diceList}
        />
      )} */}

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
