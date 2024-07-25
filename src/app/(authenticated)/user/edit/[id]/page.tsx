import { Metadata } from "next";

import UserEdit from "@/components/user/edit";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - User Edit`,
  description: `${SITE_TITLE} - User Edit`
};

interface Props {
  params: {
    id: string;
  };
}

export default function UserEditPage({ params }: Props) {
  const { id } = params;

  return <UserEdit id={id} />;
}
