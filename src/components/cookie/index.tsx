"use client";

import { useEffect } from "react";

import { LuCookie } from "react-icons/lu";

import PageLayout from "@/components/_layout/_page";
import useTeamMemberStore from "@/zustand/TeamMember";

import CookieSetter from "./CookieSetter";

export default function Cookie() {
  const store = useTeamMemberStore();

  useEffect(() => {
    store.getListAction();
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-[12px] lg:gap-[24px]">
        <div className="flex items-center justify-start gap-2">
          <LuCookie className="text-[24px] lg:text-[32px]" />
          <h2 className="font-lbv text-[24px] font-[700] lg:text-[32px]">
            Cookie Consent
          </h2>
        </div>

        <div className="flex flex-1 flex-col gap-4 rounded-[8px] bg-tertiary p-4">
          <CookieSetter />
        </div>
      </div>
    </PageLayout>
  );
}
