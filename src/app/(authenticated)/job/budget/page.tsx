import { Metadata } from "next";

import JobBudget from "@/components/job/budget";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Budget`,
  description: `${SITE_TITLE} - Job Budget`
};

export default function JobBudgetPage() {
  return <JobBudget />;
}
