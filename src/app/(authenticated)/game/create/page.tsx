import { Metadata } from "next";

import GameCreate from "@/components/game/create";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Game Create`,
  description: `${SITE_TITLE} - Game Create`
};

export default function GameCreatePage() {
  return <GameCreate />;
}
