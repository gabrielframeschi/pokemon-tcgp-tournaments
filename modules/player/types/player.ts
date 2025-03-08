export interface IPlayer {
  id: string;
  badges: IPlayerBadge[];
  name: string;
  creationDate: string;
  lastUpdate: string;
  tournamentAmount: number;
}

export interface IPlayerBadge {
  id: string;
  achievementDate: string;
  description?: string;
}
