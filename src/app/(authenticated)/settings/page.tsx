import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Settings from "@/components/settings";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Settings`,
  description: `${SITE_TITLE} - Settings`
};

export default function SettingsPage() {
  return <Settings />;
}
