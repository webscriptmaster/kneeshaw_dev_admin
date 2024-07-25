"use client";

import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

import { LuLayoutDashboard } from "react-icons/lu";

import LoadingOverlay from "@/components/_layout/LoadingOverlay";
import PageLayout from "@/components/_layout/_page";

import useAuthStore from "@/zustand/Auth";

import Information from "./Information";

export default function Dashboard() {
  const router = useRouter();

  const authStore = useAuthStore();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized && !authStore.user?._id) {
      router.push("/signin");
    }
  }, [initialized]);

  if (!initialized) return <LoadingOverlay loading />;

  if (initialized && authStore.user?._id)
    return (
      <PageLayout>
        <div className="flex flex-1 flex-col gap-[12px] lg:gap-[24px]">
          <div className="flex items-center justify-start gap-2">
            <LuLayoutDashboard className="text-[24px] lg:text-[32px]" />
            <h2 className="font-lbv text-[24px] font-[700] lg:text-[32px]">
              Dashboard
            </h2>
          </div>

          <div className="flex flex-1 flex-col gap-4 rounded-[8px] bg-tertiary p-4">
            <Information />
          </div>
        </div>
      </PageLayout>
    );

  return <LoadingOverlay loading />;
}
