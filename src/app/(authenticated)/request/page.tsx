import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import Request from "@/components/request";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Data Request`,
  description: `${SITE_TITLE} - Data Request`
};

export default function RequestPage() {
  return <Request />;
}
