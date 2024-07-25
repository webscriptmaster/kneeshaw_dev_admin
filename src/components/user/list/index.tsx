"use client";

import { useEffect } from "react";

import { LuUsers } from "react-icons/lu";

import PageLayout from "@/components/_layout/_page";
import useUserStore from "@/zustand/User";

import DataTable from "./DataTable";
import { columns } from "./DataTable/columns";

export default function UserList() {
  const store = useUserStore();

  useEffect(() => {
    store.getListAction();
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-[12px] lg:gap-[24px]">
        <div className="flex items-center justify-start gap-2">
          <LuUsers className="text-[24px] lg:text-[32px]" />
          <h2 className="font-lbv text-[24px] font-[700] lg:text-[32px]">
            User
          </h2>
        </div>

        <div className="flex flex-1 flex-col gap-4 rounded-[8px] bg-tertiary p-4">
          <DataTable columns={columns} data={store.users ?? []} />
        </div>
      </div>
    </PageLayout>
  );
}
