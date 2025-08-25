export type TournamentStatus = "finished" | "in-progress" | "not-started";

export interface ITournament {
  id: string;
  name: string;
  date: string;
  status: TournamentStatus;
  creationDate: string;
  lastUpdate: string;
  rankingId: string;
  roundsAmount: number;
  rules: string;
}
