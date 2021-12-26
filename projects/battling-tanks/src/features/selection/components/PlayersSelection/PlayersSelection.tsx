import { FormEvent, FunctionComponent } from 'react';

import { AppFeature, PlayerColor } from 'src/common/types';
import { Button } from 'src/common/components';
import { BattlingTanksContext, useBattlingTanks } from 'src/context';
import { setPlayers } from 'src/store';
import { usePlayersForm } from './use-players-form';
import { PlayerSelection } from '../PlayerSelection/PlayerSelection';

export interface PlayersSelectionProps {
  onNavigate: (feature: AppFeature) => void;
}

export const PlayersSelection: FunctionComponent<PlayersSelectionProps> = ({
  onNavigate,
}) => {

  const {state, dispatch} = useBattlingTanks() as BattlingTanksContext;
  const [formValue, updateForm] = usePlayersForm({
    attackerColor: state.attacker?.color ?? PlayerColor.Red,
    attackerTanks: state.attacker?.tanks ?? 3,
    defenderColor: state.defender?.color ?? PlayerColor.Blue,
    defenderTanks: state.defender?.tanks ?? 3,
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(setPlayers(formValue));
    onNavigate(AppFeature.Battle);
  };

  return (
    <div className="players-selection">
      <form onSubmit={onSubmit}>

        <PlayerSelection
          role="defender"
          formValue={formValue}
          updateForm={updateForm}
        />

        <PlayerSelection
          role="attacker"
          formValue={formValue}
          updateForm={updateForm}
        />

        {/* Submit */}
        <div className="players-selection__submit">
          <Button
            isDisabled={!formValue.attackerTanks || !formValue.defenderTanks}
            onClick={onSubmit}
            fullWidth
            size="large"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
