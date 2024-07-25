import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import BlogCategory from "@/components/blog/category";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Blog Category`,
  description: `${SITE_TITLE} - Blog Category`
};

export default function BlogCategoryPage() {
  return <BlogCategory />;
}
