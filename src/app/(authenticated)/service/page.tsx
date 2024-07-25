import { Metadata } from "next";

import Service from "@/components/service";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Service`,
  description: `${SITE_TITLE} - Service`
};

export default function ServicePage() {
  return <Service />;
}
