import { PlayerBoard, BoardArrows, Button } from 'src/common/components';
import { useBattlingTanks } from './store';
import './App.scss';

export const App = () => {

  const {
    state,
    setAttacker,
    setDefender,
    fight,
  } = useBattlingTanks();

  const onLogState = () => {
    console.log(state);
  };

  const onInitState = () => {
    setAttacker({ color: 'red', tanks: 5 });
    setDefender({ color: 'blue', tanks: 2 });
  };

  return (
    <div className="App">
      <div className="board">

        {state.defender && (
          <PlayerBoard
            role={state.defender.role}
            color={state.defender.color}
            tanks={state.defender.tanksList}
            isRolling={state.isRolling}
            dice={state.defender.diceList}
          />
        )}

        {state.attacker && (
          <PlayerBoard
            role={state.attacker.role}
            color={state.attacker.color}
            tanks={state.attacker.tanksList}
            isRolling={state.isRolling}
            dice={state.attacker.diceList}
          />
        )}

        {/* {outcome && (
          <BoardArrows
            attackerColor={attackingPlayer.color}
            defenderColor={defendingPlayer.color}
            outcome={outcome}
          />
        )} */}

      </div>

      <div className="controls">
        <Button disabled={state.isRolling} onClick={fight} size="larger" fullWidth>
          FIGHT!
        </Button>
        <button onClick={onLogState}>Log state</button>
        <button onClick={onInitState}>Init state</button>
      </div>

    </div>
  );
};
