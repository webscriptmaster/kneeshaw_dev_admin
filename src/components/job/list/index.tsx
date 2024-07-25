"use client";

import { useEffect } from "react";

import { LuBriefcase } from "react-icons/lu";

import PageLayout from "@/components/_layout/_page";
import useJobListStore from "@/zustand/JobList";

import DataTable from "./DataTable";
import { columns } from "./DataTable/columns";

export default function JobList() {
  const store = useJobListStore();

  useEffect(() => {
    store.getListAction();
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-[12px] lg:gap-[24px]">
        <div className="flex items-center justify-start gap-2">
          <LuBriefcase className="text-[24px] lg:text-[32px]" />
          <h2 className="font-lbv text-[24px] font-[700] lg:text-[32px]">
            Job / Job List
          </h2>
        </div>

        <div className="flex flex-1 flex-col gap-4 rounded-[8px] bg-tertiary p-4">
          <div className="flex-1">
            <DataTable columns={columns} data={store.jobs ?? []} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
