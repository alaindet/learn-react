import { FunctionComponent, Fragment } from 'react';
import { Button } from 'src/common/components';
import { AppFeature, PlayerData } from 'src/common/types';

import { BattlingTanksContext, useBattlingTanks } from 'src/context';
import { battle, battleEnd, battleStart, battleCleanup } from 'src/store';
import { PlayerBoard } from '../PlayerBoard/PlayerBoard';
import { Arrows } from '../Arrows/Arrows';
import './BattleField.scss';

export interface BattleFieldProps {
  onNavigate: (feature: AppFeature) => void;
}

export const BattleField: FunctionComponent<BattleFieldProps> = ({
  onNavigate,
}) => {
  const { state, dispatch } = useBattlingTanks() as BattlingTanksContext;

  const onNavigateToSelection = () => {
    onNavigate(AppFeature.Selection);
  };

  const onFight = () => {
    dispatch(battleStart());
    setTimeout(() => {
      dispatch(battle());
      dispatch(battleEnd());
    }, 500);
  };

  const onFightOrNext = () => {
    if (state?.battleOutcome) {
      dispatch(battleCleanup());
      return;
    }
    onFight();
  };

  if (!state?.attacker || !state?.defender) {
    onNavigateToSelection();
  }

  const defender: PlayerData = state.defender as PlayerData;
  const attacker: PlayerData = state.attacker as PlayerData;
  const tankWidth = '48px';
  const dieWidth = '48px';
  const canContinue = attacker.tanks > 0 && defender.tanks > 0;
  let winner = null;
  if (!canContinue) {
    winner = (attacker.tanks === 0) ? defender.color : attacker.color;
  }

  return (
    <Fragment>
      <div className="battlefield">

        {/* Defender */}
        <div className="battlefield__defender">
          <PlayerBoard
            role="defender"
            color={defender.color}
            tanks={defender.tanksList}
            isRolling={state.isRolling}
            dice={defender.diceList}
            tankWidth={tankWidth}
            dieWidth={dieWidth}
          />
        </div>

        {/* Attacker */}
        <div className="battlefield__attacker">
          <PlayerBoard
            role="attacker"
            color={attacker.color}
            tanks={attacker.tanksList}
            isRolling={state.isRolling}
            dice={attacker.diceList}
            tankWidth={tankWidth}
            dieWidth={dieWidth}
          />
        </div>

        {/* Outcome */}
        {state?.battleOutcome && (
          <Arrows
            attackerColor={attacker.color}
            defenderColor={defender.color}
            outcome={state.battleOutcome}
          />
        )}
      </div>

      {/* Fight */}
      <div className="battlefield-controls">
        {canContinue &&
          <Button onClick={onFightOrNext} fullWidth size="large" className="ya-mb2">
            {state?.battleOutcome ? 'Next' : 'Fight!'}
          </Button>
        }
        {winner && (
          <p>{winner} won</p>
        )}
        <Button onClick={onNavigateToSelection} fullWidth size="large" fill="outline">
          Settings
        </Button>
      </div>
    </Fragment>
  );
};
