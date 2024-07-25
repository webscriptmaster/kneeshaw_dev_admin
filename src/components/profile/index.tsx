"use client";

import { LuHome } from "react-icons/lu";

import PageLayout from "@/components/_layout/_page";
import UnderConstruction from "@/components/_layout/UnderConstruction";

export default function Profile() {
  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-[12px] lg:gap-[24px]">
        <div className="flex items-center justify-start gap-2">
          <LuHome className="text-[24px] lg:text-[32px]" />
          <h2 className="font-lbv text-[24px] font-[700] lg:text-[32px]">
            My Profile
          </h2>
        </div>

        <div className="flex flex-1 flex-col gap-4 rounded-[8px] bg-tertiary p-4">
          <UnderConstruction />
        </div>
      </div>
    </PageLayout>
  );
}
