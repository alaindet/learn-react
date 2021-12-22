import { FunctionComponent } from 'react';

import { useBattlingTanks, BattlingTanksContext } from 'src/context';
import { ActionType } from 'src/store';
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

  const onSetAttacker = () => {
    dispatch({
      type: ActionType.SetAttacker,
      payload: {
        role: 'attacker',
        color: 'red',
        tanks: 3,
        tanksList: [1, 1, 1],
        diceList: [0, 0, 0],
      },
    });
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
        <button onClick={onSetAttacker}>Set attacker</button>
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
