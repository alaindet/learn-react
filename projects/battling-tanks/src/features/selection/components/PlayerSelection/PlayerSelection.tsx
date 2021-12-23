import { FormEvent, FunctionComponent } from 'react';

import { PlayerColor } from 'src/common/types';
import { range } from 'src/common/utils';
import { BattlingTanksContext, useBattlingTanks } from 'src/context';
import { ActionType } from 'src/store';
import { usePlayersForm } from './use-players-form';
import './PlayerSelection.scss';
import { SquareButton, Button } from 'src/common/components';

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
    onSelectPlayers();
  };

  const onLogFormState = () => {
    logFormValue();
  };

  // TODO: Move in another file
  const playerColors = Object.keys(PlayerColor).map(color => color.toLowerCase() as PlayerColor);
  const tanksRange = range(1, 3);

  const onSelectAttackerColor = (color: PlayerColor): void => {
    updateForm('attackerColor', color);
  };

  const onSelectDefenderColor = (color: PlayerColor): void => {
    updateForm('defenderColor', color);
  };

  return (
    <div className="player-selection">

      <button onClick={onSelectPlayers}>Select players!</button>

      <form onSubmit={onSubmit}>
        <div className="player-selection__attacker">

          <div className="ui-form-control">
            <label htmlFor="attacker-color">Attacker color</label>
            {playerColors.map(color => (
              <SquareButton
                key={color}
                color={color}
                size="64px"
                isActive={formValue.attackerColor === color}
                onClick={onSelectAttackerColor}
              />
            ))}
          </div>

          <div className="ui-form-control">
            <label htmlFor="attacker-tanks">Attacker tanks</label>
            {tanksRange.map(tank => (
              <SquareButton
                key={tank}
                color={PlayerColor.Black}
                onClick={() => updateForm('attackerTanks', tank)}
                isActive={formValue.attackerTanks === tank}
              >
                {tank}
              </SquareButton>
            ))}
            <input
              type="number"
              id="attacker-tanks"
              value={formValue.attackerTanks}
              onChange={e => updateForm('attackerTanks', e.target.value)}
            />
          </div>
        </div>

        <div className="player-selection__defender">
          <div className="ui-form-control">
            <label htmlFor="defender-color">Defender color</label>
              {playerColors.map(color => (
                <SquareButton
                  key={color}
                  color={color}
                  size="64px"
                  isActive={formValue.defenderColor === color}
                  onClick={onSelectDefenderColor}
                />
              ))}
          </div>
          <div className="ui-form-control">
            <label htmlFor="defender-tanks">Defender tanks</label>
            {tanksRange.map(tank => (
              <SquareButton
                key={tank}
                color={PlayerColor.Black}
                onClick={() => updateForm('defenderTanks', tank)}
                isActive={formValue.defenderTanks === tank}
              >
                {tank}
              </SquareButton>
            ))}
            <input
              type="number"
              value={formValue.defenderTanks}
              onChange={e => updateForm('defenderTanks', e.target.value)}
              id="defender-tanks"
            />
          </div>
        </div>

        <div className="player-selection__submit">
          <Button type="submit">Save</Button>
        </div>
      </form>

      <div className="player-selection__controls">
        <Button onClick={onLogState}>Log state</Button>
        <Button onClick={onLogFormState}>Log form state</Button>
      </div>
    </div>
  );
};
