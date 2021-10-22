import type { PlayerType } from "../components";

export interface StoreInterface {
  players: PlayerType[];
  round: number;
}

export interface GoalUpdateInterface {
  currentStore: StoreInterface;
  playerId: string;
  goal: number;
}

export interface GameEngineInterface {
  addPlayer(currentStore: StoreInterface, player: PlayerType): void;
  nextRound(currentStore: StoreInterface): void;
  handlePlayerGoal({ currentStore, playerId, goal }: GoalUpdateInterface): void;
  resetGame(): void;
}
