import { FunctionComponent } from 'react';
import './Board.scss';

import { useBattlingTanks } from '../../hooks';

export interface BattleFieldProps {

}

export const BattleField: FunctionComponent<BattleFieldProps> = ({

}) => {
  const { state, actions } = useBattlingTanks();

  const onLogState = () => {
    console.log(state);
  };

  const onInitState = () => {
    actions.setAttacker({ color: 'green', tanks: 5 });
    actions.setDefender({ color: 'purple', tanks: 2 });
  };

  const onChangePlayers = () => {
    console.log('onChangePlayers');
  };

  return (
    <div className="battlefield">

      <div className="battlefield__attacker">
        Attacker slot
      </div>

      <div className="battlefield__defender">
        Defender slot
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
