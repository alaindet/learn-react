import { BattleField } from 'src/features/battle';
import { PlayersSelection } from 'src/features/selection';
import { AppFeature } from 'src/common/types';
import { BattlingTanksContext, useBattlingTanks } from 'src/context';
import './App.scss';
import { ActionType } from './store';

export const App = () => {
  const {state, dispatch} = useBattlingTanks() as BattlingTanksContext;

  const onNavigate = (feature: AppFeature) => {
    dispatch({ type: ActionType.SetFeature, payload: feature });
  };

  return (
    <div className="App">

      {state.feature === AppFeature.Selection && (
        <PlayersSelection onNavigate={onNavigate} />
      )}

      {state.feature === AppFeature.Battle && (
        <BattleField onNavigate={onNavigate}/>
      )}

    </div>
  );
};
