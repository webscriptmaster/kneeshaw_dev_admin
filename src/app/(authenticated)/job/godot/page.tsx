import { Metadata } from "next";

import JobGodot from "@/components/job/godot";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Job Godot`,
  description: `${SITE_TITLE} - Job Godot`
};

export default function JobGodotPage() {
  return <JobGodot />;
}
