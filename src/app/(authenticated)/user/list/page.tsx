import { Metadata } from "next";

import UserList from "@/components/user/list";

import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - User List`,
  description: `${SITE_TITLE} - User List`
};

export default function UserListPage() {
  return <UserList />;
}
