import { Metadata } from "next";

import { SITE_TITLE } from "@/utils/constants";
import SignIn from "@/components/signin";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Sign In`,
  description: `${SITE_TITLE} - Sign In`
};

export default function SignInPage() {
  return <SignIn />;
}
