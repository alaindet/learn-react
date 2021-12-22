import { FunctionComponent, useState } from 'react';
import { PlayerColor } from 'src/common/types';

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
  const [attackerTanks, setAttackerTanks] = useState(3);
  const [attackerColor, setAttackerColor] = useState<PlayerColor | null>(null);
  const [defenderTanks, setDefenderTanks] = useState(3);
  const [defenderColor, setDefenderColor] = useState<PlayerColor | null>(null);

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

  // Debounce?!
  const onAttackerColorChange = (color: string): void => {
    console.log('onAttackerColorChange', color);
  };

  // Debounce?!
  const onAttackerTanksChange = (tanks: string): void => {
    console.log('onAttackerTanksChange', parseInt(tanks));
  };

  return (
    <div className="battlefield">

      <div className="battlefield__attacker">
        <label htmlFor="attacker-color">
          Attacker color
          <button type="button" onClick={() => onAttackerColorChange('red')}>
            Red
          </button>
          <button type="button" onClick={() => onAttackerColorChange('blue')}>
            Blue
          </button>
          <button type="button" onClick={() => onAttackerColorChange('green')}>
            Green
          </button>
          <button type="button" onClick={() => onAttackerColorChange('purple')}>
            Purple
          </button>
          <button type="button" onClick={() => onAttackerColorChange('yellow')}>
            Yellow
          </button>
          <button type="button" onClick={() => onAttackerColorChange('black')}>
            Black
          </button>
        </label>
        <label htmlFor="attacker-tanks">
          Attacker tanks
          <input
            type="number"
            onChange={e => onAttackerTanksChange(e.target.value)}
            id="attacker-tanks"
          />
        </label>
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
