import { FormEvent, FunctionComponent } from 'react';

import { PlayerColor } from 'src/common/types';
import { range } from 'src/common/utils';
import { BattlingTanksContext, useBattlingTanks } from 'src/context';
import { ActionType } from 'src/store';
import { usePlayersForm } from './use-players-form';
import './PlayerSelection.scss';

export interface PlayerSelectionProps {
  onSelectPlayers: () => void;
}

export const PlayerSelection: FunctionComponent<PlayerSelectionProps> = ({
  onSelectPlayers,
}) => {

  const {state, dispatch} = useBattlingTanks() as BattlingTanksContext;
  const [formValue, updateForm, logFormValue] = usePlayersForm({
    attackerColor: state.attacker?.color ?? PlayerColor.Red,
    attackerTanks: 3,
    defenderColor: state.attacker?.color ?? PlayerColor.Blue,
    defenderTanks: 3,
  });

  const onLogState = () => {
    console.log(state);
  };

  const onSubmit = (e: FormEvent) => {
    console.log('onSubmit', formValue);
    e.preventDefault();
    dispatch({ type: ActionType.SetPlayers, payload: formValue });
    // onSelectPlayers();
  };

  const onLogFormState = () => {
    logFormValue();
  };

  const playerColors = Object.keys(PlayerColor);
  const tanksRange = range(1, 3);

  return (
    <div className="player-selection">

      <button onClick={onSelectPlayers}>Select players!</button>

      <form onSubmit={onSubmit}>
        <div className="player-selection__attacker">
          <label htmlFor="attacker-color">
            Attacker color
            {playerColors.map(color => (
              <button
                key={color}
                type="button"
                className={formValue.attackerColor === color ? '--active' : ''}
                onClick={() => updateForm('attackerColor', color.toLowerCase())}
              >
                {color}
              </button>
            ))}
          </label>
          <label htmlFor="attacker-tanks">
            Attacker tanks
            {tanksRange.map(tank => (
              <button
                key={tank}
                type="button"
                onClick={() => updateForm('attackerTanks', tank)}
                className={formValue.attackerTanks === tank ? '--active' : ''}
              >
                {tank}
              </button>
            ))}
            <input
              type="number"
              id="attacker-tanks"
              value={formValue.attackerTanks}
              onChange={e => updateForm('attackerTanks', e.target.value)}
            />
          </label>
        </div>

        <div className="player-selection__defender">
          <label htmlFor="defender-color">
            Defender color
            {playerColors.map(color => (
              <button
                key={color}
                type="button"
                className={formValue.attackerColor === color ? '--active' : ''}
                onClick={() => updateForm('defenderColor', color.toLowerCase())}
              >
                {color}
              </button>
            ))}
          </label>
          <label htmlFor="defender-tanks">
            Defender tanks
            {tanksRange.map(tank => (
              <button
                key={tank}
                type="button"
                onClick={() => updateForm('defenderTanks', tank)}
                className={formValue.defenderTanks === tank ? '--active' : ''}
              >
                {tank}
              </button>
            ))}
            <input
              type="number"
              value={formValue.defenderTanks}
              onChange={e => updateForm('defenderTanks', e.target.value)}
              id="defender-tanks"
            />
          </label>
        </div>

        <div className="player-selection__submit">
          <button type="submit">Save</button>
        </div>
      </form>

      <div className="player-selection__controls">
        <button onClick={onLogState}>Log state</button>
        <button onClick={onLogFormState}>Log form state</button>
      </div>
    </div>
  );
};
