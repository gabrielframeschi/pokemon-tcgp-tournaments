export interface IPlayer {
  id: string;
  badges: IPlayerBadge[];
  name: string;
  creationDate: string;
  lastUpdate: string;
  tournamentAmount: number;
  matchAmount: number;
  winAmount: number;
}

export interface IPlayerBadge {
  id: string;
  achievementDate: string;
  description?: string;
}
