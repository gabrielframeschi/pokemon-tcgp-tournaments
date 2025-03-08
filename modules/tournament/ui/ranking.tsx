import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IRanking } from "@/modules/tournament/types";
import { sortRanking } from "@/modules/tournament/utils/ranking";
import rankingRawData from "@/temp/ranking.json";

const Ranking = () => {
  const data: IRanking = structuredClone(rankingRawData);
  const ranking = sortRanking(data.players);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead />
          <TableHead>Jogador</TableHead>
          <TableHead>Pontuação</TableHead>
          <TableHead>Placar</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {ranking.map((player, index) => (
          <TableRow key={player.id}>
            <TableCell className="text-zinc-400">{`#${index + 1}`}</TableCell>
            <TableCell className="font-medium">
              <Link href={`/player/${player.id}`}>{player.name}</Link>
            </TableCell>
            <TableCell>{player.score}</TableCell>
            <TableCell>{player.record}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Ranking;
