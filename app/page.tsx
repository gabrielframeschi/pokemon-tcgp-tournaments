import { Card } from "@/components/custom-card";
import { ITournament } from "@/modules/tournament/types";
import { Ranking, TournamentHeader } from "@/modules/tournament/ui";
import tournamentsRawData from "@/temp/tournaments.json";

export default function Home() {
  const data: ITournament[] = structuredClone(
    tournamentsRawData,
  ) as ITournament[];
  const tournament = data[0];

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <TournamentHeader data={tournament} />
      </Card>

      <Card>
        <Ranking />
      </Card>
    </div>
  );
}
