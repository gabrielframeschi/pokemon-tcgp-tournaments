import Image from "next/image";

import { getBadge } from "@/modules/player/utils";

interface IProps {
  badgeId?: string;
}

const EmptyBadge = () => {
  return (
    <div className="rounded-full h-12 w-12 border-2 border-gray-300 border-dashed" />
  );
};

export const Badge = (props: IProps) => {
  const { badgeId } = props;

  if (!badgeId) return <EmptyBadge />;

  const badgePath = getBadge(badgeId);
  if (!badgePath) return <EmptyBadge />;

  return (
    <Image
      id={badgeId}
      alt="Player's badge"
      height={48}
      width={48}
      src={badgePath}
      className="rounded-full h-12 w-12 select-none"
    />
  );
};
