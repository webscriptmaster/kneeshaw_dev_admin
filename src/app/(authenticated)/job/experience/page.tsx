import { Metadata } from "next";

import JobExperience from "@/components/job/experience";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Experience`,
  description: `${SITE_TITLE} - Job Experience`
};

export default function JobExperiencePage() {
  return <JobExperience />;
}
