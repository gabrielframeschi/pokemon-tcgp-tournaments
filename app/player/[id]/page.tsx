import { notFound } from "next/navigation";

import { PlayerHeader } from "@/modules/player/ui";
import playersRawData from "@/temp/players.json";
import { IPlayer } from "@/modules/player/types";
import Link from "next/link";
import { Card } from "@/components/custom-card";

interface IProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Player(props: IProps) {
  const { id } = await props.params;

  const data: IPlayer[] = structuredClone(playersRawData);
  const player = data.find((player) => player.id === id);

  if (!player) return notFound();

  return (
    <div className="flex flex-col gap-6">
      <Card className="px-6 py-4">
        <Link href="/" className="text-gray-500 text-sm underline">
          Back
        </Link>
      </Card>

      <Card>
        <PlayerHeader data={player} />
      </Card>
    </div>
  );
}
