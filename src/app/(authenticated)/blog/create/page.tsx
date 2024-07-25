import { Metadata } from "next";

import BlogCreate from "@/components/blog/create";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Blog Create`,
  description: `${SITE_TITLE} - Blog Create`
};

export default function BlogCreatePage() {
  return <BlogCreate />;
}
