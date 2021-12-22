import { FunctionComponent } from 'react';

export interface PlayerSelectionProps {
  onSelectPlayers: (arg: { attacker: any; defender: any; }) => void;
}

export const PlayerSelection: FunctionComponent<PlayerSelectionProps> = ({
  onSelectPlayers: onSelectPlayersInput,
}) => {

  const onSelectPlayers = () => {
    onSelectPlayersInput({
      attacker: { name: 'Alice', color: 'red', tanks: 3 },
      defender: { name: 'Bob', color: 'blue', tanks: 3 },
    });
  };

  return (
    <div className="player-selection">
      Player Selection
      <button onClick={onSelectPlayers}>Select players!</button>
    </div>
  );
};
