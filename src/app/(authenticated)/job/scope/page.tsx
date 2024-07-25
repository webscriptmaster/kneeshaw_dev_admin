import { Metadata } from "next";

import JObScope from "@/components/job/scope";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Scope`,
  description: `${SITE_TITLE} - Job Scope`
};

export default function JobScopePage() {
  return <JObScope />;
}
