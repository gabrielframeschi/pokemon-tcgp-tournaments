import { IRankingPlayer } from "@/modules/tournament/types";

export const sortRanking = (data: IRankingPlayer[]) => {
  const sortedByLastUpdate = data.sort((a, b) => a.lastUpdate.localeCompare(b.lastUpdate))
  const sortedByScore = sortedByLastUpdate.sort((a, b) => b.score - a.score);

  return sortedByScore;
};
