import { Metadata } from "next";

import GameCategory from "@/components/game/category";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Game Category`,
  description: `${SITE_TITLE} - Game Category`
};

export default function GameCategoryPage() {
  return <GameCategory />;
}
