"use client";

import { useEffect } from "react";

import { LuBriefcase } from "react-icons/lu";

import PageLayout from "@/components/_layout/_page";
import useJobScopeStore from "@/zustand/JobScope";

import CreateModal from "./CreateModal";
import DataTable from "./DataTable";
import { columns } from "./DataTable/columns";

export default function JobScope() {
  const store = useJobScopeStore();

  useEffect(() => {
    store.getListAction();
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-[12px] lg:gap-[24px]">
        <div className="flex items-center justify-start gap-2">
          <LuBriefcase className="text-[24px] lg:text-[32px]" />
          <h2 className="font-lbv text-[24px] font-[700] lg:text-[32px]">
            Job / Scope
          </h2>
        </div>

        <div className="flex flex-1 flex-col gap-4 rounded-[8px] bg-tertiary p-4">
          <div className="w-full">
            <CreateModal />
          </div>

          <div className="flex-1">
            <DataTable columns={columns} data={store.jobScopes ?? []} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
