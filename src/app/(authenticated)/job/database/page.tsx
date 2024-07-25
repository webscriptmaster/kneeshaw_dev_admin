import { Metadata } from "next";

import JobDatabase from "@/components/job/database";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Database`,
  description: `${SITE_TITLE} - Job Database`
};

export default function JobDatabasePage() {
  return <JobDatabase />;
}
