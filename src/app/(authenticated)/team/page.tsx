import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Team from "@/components/team";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Team`,
  description: `${SITE_TITLE} - Team`
};

export default function TeamPage() {
  return <Team />;
}
