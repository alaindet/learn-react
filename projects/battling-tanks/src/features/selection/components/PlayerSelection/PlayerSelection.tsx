import { FunctionComponent } from 'react';

import { SquareButton, TextInput } from 'src/common/components';
import { PLAYER_COLORS } from 'src/common/data';
import { PlayerColor, PlayerRole } from 'src/common/types';
import { range, getOppositePlayerRole } from 'src/common/utils';
import './PlayerSelection.scss';

export interface PlayerSelectionProps {
  role: PlayerRole;
  formValue: any;
  updateForm: (field: string, value: any) => void;
}

export const PlayerSelection: FunctionComponent<PlayerSelectionProps> = ({
  role,
  formValue,
  updateForm,
}) => {

  // TODO: Memoize?
  const roleTitle = role[0].toUpperCase() + role.slice(1);
  const tanksRange = range(1, 3);
  const colorKey = `${role}Color`;
  const tanksKey = `${role}Tanks`;
  const oppositeRole = getOppositePlayerRole(role);
  const oppositeColorKey = `${oppositeRole}Color`;
  const currentColor = formValue[colorKey];
  const oppositeColor = formValue[oppositeColorKey];
  const currentTanks = formValue[tanksKey];

  const onUpdateTanks = (event: InputEvent) => {
    let rawVal = (event.target as HTMLInputElement).value;
    if (!rawVal) {
      updateForm(tanksKey, rawVal);
    }
    const val = parseInt(rawVal);
    updateForm(tanksKey, val);
  };

  return (
    <div className="player-selection">
      <div className="ui-form-control">
        <label>{roleTitle} color</label>
        <div className="ya-cols">
          {PLAYER_COLORS.map(color => (
            <div key={color} className="ya-col-4 ya-col-m-2 ya-p1 center-content">
              <SquareButton
                color={color}
                size="42px"
                isDisabled={oppositeColor === color}
                isActive={currentColor === color}
                onClick={() => updateForm(colorKey, color)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="ui-form-control">
        <label>{roleTitle} tanks</label>
        <div className="ya-cols">
          {tanksRange.map(tank => (
            <div key={tank} className="ya-col-4 ya-col-m-2 ya-p1 center-content">
              <SquareButton
                color={PlayerColor.Black}
                size="42px"
                onClick={() => updateForm(tanksKey, tank)}
                isActive={currentTanks === tank}
              >
                {tank}
              </SquareButton>
            </div>
          ))}
          <div className="ya-col-12 ya-mt2">
            <TextInput
              type="number"
              value={currentTanks}
              fullWidth
              centeredContent
              onInput={onUpdateTanks}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
