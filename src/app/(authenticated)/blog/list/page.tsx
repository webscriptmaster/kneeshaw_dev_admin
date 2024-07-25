import { Metadata } from "next";

import BlogList from "@/components/blog/list";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Blog List`,
  description: `${SITE_TITLE} - Blog List`
};

export default function BlogListPage() {
  return <BlogList />;
}
