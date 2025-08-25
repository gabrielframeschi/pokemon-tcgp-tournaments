import { formatDateToLocaleString } from "@/lib/format";
import { ITournament } from "@/modules/tournament/types";
import { StatusBadge } from "@/modules/tournament/ui/status-badge";

interface IProps {
  data: ITournament;
}

export const TournamentHeader = (props: IProps) => {
  const { data } = props;

  return (
    <header className="flex flex-col gap-2">
      <StatusBadge status={data.status} />
      <h1 className="text-2xl font-bold mb-2">{data.name}</h1>

      <ul className="flex flex-col gap-1 text-sm text-gray-500 font-medium">
        <li>{`Date: ${formatDateToLocaleString(data.date)}`}</li>
        <li>{`Last update: ${formatDateToLocaleString(data.lastUpdate)}`}</li>

        <li>{`${data.roundsAmount} rounds`}</li>
      </ul>
    </header>
  );
};
