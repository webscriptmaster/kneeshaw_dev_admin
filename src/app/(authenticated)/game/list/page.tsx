import { Metadata } from "next";

import GameList from "@/components/game/list";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Game List`,
  description: `${SITE_TITLE} - Game List`
};

export default function GameListPage() {
  return <GameList />;
}
