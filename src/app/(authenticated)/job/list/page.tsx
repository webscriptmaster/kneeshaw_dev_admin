import { Metadata } from "next";

import JobList from "@/components/job/list";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job List`,
  description: `${SITE_TITLE} - Job List`
};

export default function JobListPage() {
  return <JobList />;
}
