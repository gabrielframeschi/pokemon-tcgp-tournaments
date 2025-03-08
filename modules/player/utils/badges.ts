import { badges } from "@/modules/player/constants";

export const getBadge = (badgeId: string) => {
  if (!badgeId) return "";

  const badgePath = badges[badgeId];
  if (!badgePath) return "";

  return badgePath;
}
