import { Metadata } from "next";

import Feedback from "@/components/feedback";
import { SITE_TITLE } from "@/utils/constants";

export const metadata: Metadata = {
  title: `${SITE_TITLE} - Feedback`,
  description: `${SITE_TITLE} - Feedback`
};

export default function FeedbackPage() {
  return <Feedback />;
}
