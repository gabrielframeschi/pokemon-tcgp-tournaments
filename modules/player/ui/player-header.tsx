import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatDateToLocaleString } from "@/lib/format";
import { IPlayer } from "@/modules/player/types";
import { Badge } from "@/modules/player/ui/badge";

const BADGES_AMOUNT = 3;

interface IProps {
  data: IPlayer;
}

export const PlayerHeader = (props: IProps) => {
  const { data } = props;

  const badges = data.badges.slice(0, BADGES_AMOUNT);

  return (
    <header className="flex flex-col gap-2">
      <h1 className="text-xl text-gray-950 font-medium">{data.name}</h1>

      <ul className="flex flex-col gap-1 text-sm text-gray-500 font-medium">
        <li>{`Tournaments: ${data.tournamentAmount}`}</li>
        <li>{`Matches: ${data.matchAmount}`}</li>
        <li>{`Wins: ${data.winAmount}`}</li>
      </ul>

      <div className="flex gap-4 mt-2">
        {badges.map((badge) => (
          <Tooltip key={badge.id}>
            <TooltipTrigger asChild>
              <Badge badgeId={badge.id} />
            </TooltipTrigger>

            <TooltipContent>
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold">{badge.description}</p>
                <p className="text-zinc-300 font-medium">
                  {formatDateToLocaleString(badge.achievementDate)}
                </p>
              </div>
            </TooltipContent>
          </Tooltip>
        ))}

        {Array.from({
          length: Math.max(0, BADGES_AMOUNT - badges.length),
        }).map((_, index) => (
          <Badge key={index} />
        ))}
      </div>
    </header>
  );
};
