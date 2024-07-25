import { Metadata } from "next";

import GameEdit from "@/components/game/edit";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Game Edit`,
  description: `${SITE_TITLE} - Game Edit`
};

interface Props {
  params: {
    id: string;
  };
}

export default function GameEditPage({ params }: Props) {
  const { id } = params;

  return <GameEdit id={id} />;
}
