"use client";

import { useEffect } from "react";

import { LuShieldQuestion } from "react-icons/lu";

import PageLayout from "@/components/_layout/_page";
import useFaqStore from "@/zustand/Faq";

import CreateModal from "./CreateModal";
import DataTable from "./DataTable";
import { columns } from "./DataTable/columns";

export default function FAQ() {
  const store = useFaqStore();

  useEffect(() => {
    store.getListAction();
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-[12px] lg:gap-[24px]">
        <div className="flex items-center justify-start gap-2">
          <LuShieldQuestion className="text-[24px] lg:text-[32px]" />
          <h2 className="font-lbv text-[24px] font-[700] lg:text-[32px]">
            FAQ
          </h2>
        </div>

        <div className="flex flex-1 flex-col gap-4 rounded-[8px] bg-tertiary p-4">
          <div className="w-full">
            <CreateModal />
          </div>

          <div className="flex-1">
            <DataTable columns={columns} data={store.faqs ?? []} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
