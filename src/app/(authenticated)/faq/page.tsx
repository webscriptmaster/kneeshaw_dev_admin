import { Metadata } from "next";

import FAQ from "@/components/faq";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - FAQ`,
  description: `${SITE_TITLE} - FAQ`
};

export default function FaqPage() {
  return <FAQ />;
}
