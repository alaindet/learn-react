import { FormEvent, FunctionComponent } from 'react';

import { PlayerColor } from 'src/common/types';
import { Button } from 'src/common/components';
import { BattlingTanksContext, useBattlingTanks } from 'src/context';
import { ActionType } from 'src/store';
import { usePlayersForm } from './use-players-form';
import './PlayersSelection.scss';
import { PlayerSelection } from '../PlayerSelection/PlayerSelection';

export interface PlayersSelectionProps {
  onSelectPlayers: () => void;
}

export const PlayersSelection: FunctionComponent<PlayersSelectionProps> = ({
  onSelectPlayers,
}) => {

  const {state, dispatch} = useBattlingTanks() as BattlingTanksContext;
  const [formValue, updateForm] = usePlayersForm({
    attackerColor: state.attacker?.color ?? PlayerColor.Red,
    attackerTanks: 3,
    defenderColor: state.attacker?.color ?? PlayerColor.Blue,
    defenderTanks: 3,
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({ type: ActionType.SetPlayers, payload: formValue });
    onSelectPlayers();
  };

  return (
    <div className="players-selection">
      <form onSubmit={onSubmit}>

        <PlayerSelection
          role="attacker"
          formValue={formValue}
          updateForm={updateForm}
        />

        <PlayerSelection
          role="defender"
          formValue={formValue}
          updateForm={updateForm}
        />

        {/* Submit */}
        <div className="players-selection__submit">
          <Button onClick={onSubmit} fullWidth size="large">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
