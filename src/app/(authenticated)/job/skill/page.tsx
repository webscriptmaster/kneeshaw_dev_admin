import { Metadata } from "next";

import JobSkill from "@/components/job/skill";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Skill`,
  description: `${SITE_TITLE} - Job Skill`
};

export default function JobSkillPage() {
  return <JobSkill />;
}
