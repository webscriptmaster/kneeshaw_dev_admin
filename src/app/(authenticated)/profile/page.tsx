import { Metadata } from "next";

import Profile from "@/components/profile";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Profile`,
  description: `${SITE_TITLE} - Profile`
};

export default function ProfilePage() {
  return <Profile />;
}
