import { Badge } from "@/components/ui/badge";
import { capitalize } from "@/lib/format";
import { TournamentStatus } from "@/modules/tournament/types";

interface IProps {
  status: TournamentStatus;
}

export const StatusBadge = (props: IProps) => {
  const { status } = props;

  const formatStatusLabel = (status: TournamentStatus) => {
    if (status.includes("-")) {
      return status.split("-").map(capitalize).join(" ");
    }

    return capitalize(status);
  };

  const getVariant = () => {
    switch (status) {
      case "finished":
        return "success";
      case "in-progress":
        return "secondary";
      case "not-started":
        return "outline";
    }
  };

  return <Badge variant={getVariant()}>{formatStatusLabel(status)}</Badge>;
};
