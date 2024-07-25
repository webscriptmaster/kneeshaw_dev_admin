"use client";

import { useEffect } from "react";

import { VscFeedback } from "react-icons/vsc";

import PageLayout from "@/components/_layout/_page";
import useFeedbackStore from "@/zustand/Feedback";

import CreateModal from "./CreateModal";
import DataTable from "./DataTable";
import { columns } from "./DataTable/columns";

export default function Feedback() {
  const store = useFeedbackStore();

  useEffect(() => {
    store.getListAction();
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-[12px] lg:gap-[24px]">
        <div className="flex items-center justify-start gap-2">
          <VscFeedback className="text-[24px] lg:text-[32px]" />
          <h2 className="font-lbv text-[24px] font-[700] lg:text-[32px]">
            Feedback
          </h2>
        </div>

        <div className="flex flex-1 flex-col gap-4 rounded-[8px] bg-tertiary p-4">
          <div className="w-full">
            <CreateModal />
          </div>

          <div className="flex-1">
            <DataTable columns={columns} data={store.feedbacks ?? []} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
