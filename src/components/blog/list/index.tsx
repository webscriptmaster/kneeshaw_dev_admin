"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import { LuPlus, LuRss } from "react-icons/lu";

import PageLayout from "@/components/_layout/_page";
import { Button } from "@/components/ui/button";

import useBlogListStore from "@/zustand/BlogList";

import DataTable from "./DataTable";
import { columns } from "./DataTable/columns";

export default function BlogList() {
  const router = useRouter();
  const store = useBlogListStore();

  const handleCreateClick = () => {
    router.push("/blog/create");
  };

  useEffect(() => {
    store.getListAction();
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-[12px] lg:gap-[24px]">
        <div className="flex items-center justify-start gap-2">
          <LuRss className="text-[24px] lg:text-[32px]" />
          <h2 className="font-lbv text-[24px] font-[700] lg:text-[32px]">
            Blog
          </h2>
        </div>

        <div className="flex flex-1 flex-col gap-4 rounded-[8px] bg-tertiary p-4">
          <div className="w-full">
            <Button
              className="flex items-center gap-2"
              onClick={handleCreateClick}
            >
              <LuPlus />
              Create
            </Button>
          </div>

          <div className="flex-1">
            <DataTable columns={columns} data={store.blogs ?? []} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
