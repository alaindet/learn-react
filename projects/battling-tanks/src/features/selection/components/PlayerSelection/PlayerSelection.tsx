import { FunctionComponent } from 'react';

import { SquareButton, TextInput } from 'src/common/components';
import { PLAYER_COLORS } from 'src/common/data';
import { PlayerColor, PlayerRole } from 'src/common/types';
import { clamp, range } from 'src/common/utils';
import './PlayerSelection.scss';

export interface PlayerSelectionProps {
  role: PlayerRole;
  formValue: any;
  updateForm: (field: string, value: any) => void;
}

const MIN_TANKS = 1;
const MAX_TANKS = 100;

export const PlayerSelection: FunctionComponent<PlayerSelectionProps> = ({
  role,
  formValue,
  updateForm,
}) => {

  const roleTitle = role[0].toUpperCase() + role.slice(1);
  const tanksRange = range(1, 3);
  const colorKey = `${role}Color`;
  const currentColor = formValue[colorKey];
  const tanksKey = `${role}Tanks`;
  const currentTanks = formValue[tanksKey];

  const onUpdateColor = (color: PlayerColor): void => {
    updateForm(colorKey, color);
  };

  const onUpdateTanks = (event: InputEvent): void => {
    const target = event.target as HTMLInputElement;
    let value: any = parseInt(target.value);
    value = clamp(value, MIN_TANKS, MAX_TANKS);
    value = (value === null) ? '' : value;
    updateForm(tanksKey, value);
  };

  return (
    <div className="player-selection">
      <div className="ui-form-control">
        <label>{roleTitle} color</label>
        <div className="ya-cols">
          {PLAYER_COLORS.map(color => (
            <div key={color} className="ya-col-4 ya-col-m-2 ya-p1">
              <SquareButton
                color={color}
                size="48px"
                isActive={currentColor === color}
                onClick={() => onUpdateColor(color)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="ui-form-control">
        <label>{roleTitle} tanks</label>
        <div className="ya-cols">
          {tanksRange.map(tank => (
            <div key={tank} className="ya-col-4 ya-col-m-2 ya-p1">
              <SquareButton
                color={PlayerColor.Black}
                size="48px"
                onClick={() => updateForm(tanksKey, tank)}
                isActive={currentTanks === tank}
              >
                {tank}
              </SquareButton>
            </div>
          ))}
          <div className="ya-col-12 ya-mt2 ya-p1">
            <TextInput
              fullWidth
              type="number"
              id="attacker-tanks"
              size="large"
              value={currentTanks}
              onChange={onUpdateTanks}
            />
          </div>
        </div>
      </div>
    </div>
  );
};