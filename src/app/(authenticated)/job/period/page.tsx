import { Metadata } from "next";

import JobPeriod from "@/components/job/period";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Period`,
  description: `${SITE_TITLE} - Job Period`
};

export default function JobPeriodPage() {
  return <JobPeriod />;
}
