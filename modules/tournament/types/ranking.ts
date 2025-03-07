export interface IRanking {
  id: string;
  players: IRankingPlayer[];
}

export interface IRankingPlayer {
  id: string;
  name: string;
  record: string;
  score: number;
  lastUpdate: string;
}
