"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import { LuGamepad2, LuPlus } from "react-icons/lu";

import PageLayout from "@/components/_layout/_page";
import { Button } from "@/components/ui/button";

import useGameListStore from "@/zustand/GameList";

import DataTable from "./DataTable";
import { columns } from "./DataTable/columns";

export default function GameList() {
  const router = useRouter();
  const store = useGameListStore();

  const handleCreateClick = () => {
    router.push("/game/create");
  };

  useEffect(() => {
    store.getListAction();
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-[12px] lg:gap-[24px]">
        <div className="flex items-center justify-start gap-2">
          <LuGamepad2 className="text-[24px] lg:text-[32px]" />
          <h2 className="font-lbv text-[24px] font-[700] lg:text-[32px]">
            Game / Game List
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
            <DataTable columns={columns} data={store.games ?? []} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
