import { Metadata } from "next";

import Dashboard from "@/components/dashboard";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Dashboard`,
  description: `${SITE_TITLE} - Dashboard`
};

export default function DashboardPage() {
  return <Dashboard />;
}
