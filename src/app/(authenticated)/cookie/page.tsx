import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Cookie from "@/components/cookie";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Cookie Consent`,
  description: `${SITE_TITLE} - Cookie Consent`
};

export default function CookiePage() {
  return <Cookie />;
}
