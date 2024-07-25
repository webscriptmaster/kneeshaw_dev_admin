import { Metadata } from "next";

import BlogEdit from "@/components/blog/edit";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Blog Edit`,
  description: `${SITE_TITLE} - Blog Edit`
};

interface Props {
  params: {
    id: string;
  };
}

export default function BlogEditPage({ params }: Props) {
  const { id } = params;

  return <BlogEdit id={id} />;
}
