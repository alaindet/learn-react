import { PlayerBoard, BoardArrows, Button } from 'src/common/components';
import { useBattlingTanks } from './store';
import './App.scss';

export const App = () => {

  const {
    state,
    actions
  } = useBattlingTanks();

  const onLogState = () => {
    console.log(state);
  };

  const onInitState = () => {
    actions.setAttacker({ color: 'green', tanks: 5 });
    actions.setDefender({ color: 'purple', tanks: 2 });
  };

  const onChangePlayers = () => {
    console.log('onChangePlayers');
  };

  return (
    <div className="App">
      <div className="board">

        <div className="board__attacker">
          Attacker slot
        </div>

        <div className="board__defender">
          Defender slot
        </div>

        {/* {state.defender && (
          <PlayerBoard
            role={state.defender.role}
            color={state.defender.color}
            tanks={state.defender.tanksList}
            isRolling={state.isRolling}
            dice={state.defender.diceList}
          />
        )} */}

        {/* {state.attacker && (
          <PlayerBoard
            role={state.attacker.role}
            color={state.attacker.color}
            tanks={state.attacker.tanksList}
            isRolling={state.isRolling}
            dice={state.attacker.diceList}
          />
        )} */}

        {/* {outcome && (
          <BoardArrows
            attackerColor={attackingPlayer.color}
            defenderColor={defendingPlayer.color}
            outcome={outcome}
          />
        )} */}

      </div>

      {/* TODO: Remove */}
      <div className="controls">
        <Button disabled={state.isRolling} onClick={actions.fight} size="larger" fullWidth>
          FIGHT!
        </Button>
        <button onClick={onLogState}>Log state</button>
        <button onClick={onInitState}>Init state</button>
        <button onClick={onChangePlayers}>Change Players</button>
      </div>

    </div>
  );
};