"use client";

import { useEffect } from "react";

import { LuGamepad2 } from "react-icons/lu";

import PageLayout from "@/components/_layout/_page";
import useGamePlatformStore from "@/zustand/GamePlatform";

import CreateModal from "./CreateModal";
import DataTable from "./DataTable";
import { columns } from "./DataTable/columns";

export default function GamePlatform() {
  const store = useGamePlatformStore();

  useEffect(() => {
    store.getListAction();
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-[12px] lg:gap-[24px]">
        <div className="flex items-center justify-start gap-2">
          <LuGamepad2 className="text-[24px] lg:text-[32px]" />
          <h2 className="font-lbv text-[24px] font-[700] lg:text-[32px]">
            Game / Platform
          </h2>
        </div>

        <div className="flex flex-1 flex-col gap-4 rounded-[8px] bg-tertiary p-4">
          <div className="w-full">
            <CreateModal />
          </div>

          <div className="flex-1">
            <DataTable columns={columns} data={store.gamePlatforms ?? []} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
