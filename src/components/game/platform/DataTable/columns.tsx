"use client";

import { ColumnDef } from "@tanstack/react-table";
import { LuArrowDown, LuArrowUp, LuChevronsUpDown } from "react-icons/lu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

import { IGamePlatform } from "@/types/interfaces";

import UpdateModal from "../UpdateModal";
import DeleteModal from "../DeleteModal";

export const columns: ColumnDef<IGamePlatform>[] = [
  {
    accessorKey: "no",
    size: 100,
    header: () => <div className="text-center">No</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Name</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => (
      <Accordion type="single" collapsible>
        <AccordionItem
          value={row.original._id ?? ""}
          className="flex flex-col gap-4 border-none"
        >
          <AccordionTrigger className="py-0 text-left">
            {row.original.name}
          </AccordionTrigger>
          <AccordionContent className="pb-0">
            {row.original.description}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  },
  {
    accessorKey: "enabled",
    size: 100,
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-center gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Enabled</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox role="button" checked={row.original.enabled} />
      </div>
    )
  },
  {
    accessorKey: "action",
    size: 120,
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => (
      <div className="flex items-center justify-center gap-2">
        <UpdateModal data={row.original} />
        <DeleteModal data={row.original} />
      </div>
    )
  }
];
