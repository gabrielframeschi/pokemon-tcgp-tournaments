import { notFound } from "next/navigation";

import { PlayerHeader } from "@/modules/player/ui";
import playersRawData from "@/temp/players.json";
import { IPlayer } from "@/modules/player/types";
import Link from "next/link";

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
      <div className="flex items-center bg-white px-6 py-4 rounded-lg shadow-2xl">
        <Link href="/" className="text-zinc-500 text-sm underline">
          Voltar
        </Link>
      </div>

      <div className="flex items-center bg-white p-6 rounded-lg shadow-2xl">
        <PlayerHeader data={player} />
      </div>
    </div>
  );
}
