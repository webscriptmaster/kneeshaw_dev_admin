import { Metadata } from "next";

import GamePlatform from "@/components/game/platform";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Game Platform`,
  description: `${SITE_TITLE} - Game Platform`
};

export default function GamePlatformPage() {
  return <GamePlatform />;
}
