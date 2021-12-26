import { MAX_VISIBLE_TANKS } from 'src/common/data';
import { TankState, Outcome, BattleResolution, DieValue } from 'src/common/types';

export type PlayerBattleData = [tanks: TankState[], dice: DieValue[]];

export const resolveBattle = (
  attacker: PlayerBattleData,
  defender: PlayerBattleData,
): BattleResolution => {

  const newAttackerTanks: TankState[] = [];
  const newDefenderTanks: TankState[] = [];
  const outcome: Outcome[] = [];
  const [attackerTanks, attackerDice] = attacker;
  const [defenderTanks, defenderDice] = defender;

  for (let i = 0; i < MAX_VISIBLE_TANKS; i++) {

    const attackerTank = attackerTanks[i];
    const defenderTank = defenderTanks[i];

    if ([attackerTank, defenderTank].includes(TankState.Disabled)) {
      outcome.push(Outcome.None);
      newAttackerTanks.push(attackerTank);
      newDefenderTanks.push(defenderTank);
      continue;
    }

    const attackerDie = attackerDice[i];
    const defenderDie = defenderDice[i];

    if (attackerDie > defenderDie) {
      outcome.push(Outcome.Attacker);
      newAttackerTanks.push(TankState.Winner);
      newDefenderTanks.push(TankState.Loser);
      continue;
    }

    outcome.push(Outcome.Defender);
    newAttackerTanks.push(TankState.Loser);
    newDefenderTanks.push(TankState.Winner);
  }

  return {
    attackerTanks: [...newAttackerTanks, ...attackerTanks.slice(3)],
    defenderTanks: [...newDefenderTanks, ...defenderTanks.slice(3)],
    outcome,
  };
};
