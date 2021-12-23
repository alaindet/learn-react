import { FormEvent, FunctionComponent, useState } from 'react';

import { PlayerColor } from 'src/common/types';
import { BattlingTanksContext, useBattlingTanks } from 'src/context';
import { usePlayersForm } from './use-players-form';

export interface PlayerSelectionProps {
  onSelectPlayers: (arg: { attacker: any; defender: any; }) => void;
}

export const PlayerSelection: FunctionComponent<PlayerSelectionProps> = ({
  onSelectPlayers: onSelectPlayersInput,
}) => {

  const {state, dispatch} = useBattlingTanks() as BattlingTanksContext;
  const [formValue, updateForm] = usePlayersForm({
    attackerColor: state.attacker?.color ?? 'red',
    attackerTanks: 3,
    defenderColor: state.attacker?.color ?? 'blue',
    defenderTanks: 3,
  });

  const onSelectPlayers = () => {
    onSelectPlayersInput({
      attacker: { name: 'Alice', color: 'red', tanks: 3 },
      defender: { name: 'Bob', color: 'blue', tanks: 3 },
    });
  };

  const onLogState = () => {
    console.log(state);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('onSubmit', formValue);
  };

  // TODO: Make PlayerColor enum
  const PLAYER_COLOR = [
    'red',
    'black',
    'purple',
    'yellow',
    'green',
    'blue',
  ];

  return (
    <div className="player-selection">

      <button onClick={onSelectPlayers}>Select players!</button>

      <form onSubmit={onSubmit}>
        <div className="player-selection__attacker">
          <label htmlFor="attacker-color">
            Attacker color
            {PLAYER_COLOR.map(color => (
              <button
                type="button"
                className="{formValue.attackerColor === color ? '--active' : ''}"
                onClick={() => updateForm('attackerColor', color)}
              >
                {color}
              </button>
            ))}
          </label>
          <label htmlFor="attacker-tanks">
            Attacker tanks
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
            {PLAYER_COLOR.map(color => (
              <button
                type="button"
                className="{formValue.attackerColor === color ? '--active' : ''}"
                onClick={() => updateForm('defenderColor', color)}
              >
                {color}
              </button>
            ))}
          </label>
          <label htmlFor="defender-tanks">
            Defender tanks
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
      </div>
    </div>
  );
};
