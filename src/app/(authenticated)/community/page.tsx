import { Metadata } from "next";

import Community from "@/components/community";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Community`,
  description: `${SITE_TITLE} - Community`
};

export default function CommunityPage() {
  return <Community />;
}
