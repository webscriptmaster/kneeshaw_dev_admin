"use client";

import { ColumnDef } from "@tanstack/react-table";
import { LuArrowDown, LuArrowUp, LuChevronsUpDown } from "react-icons/lu";

import { ICommunityJoiner } from "@/types/interfaces";

import UpdateModal from "../UpdateModal";
import DeleteModal from "../DeleteModal";

export const columns: ColumnDef<ICommunityJoiner>[] = [
  {
    accessorKey: "no",
    size: 100,
    header: () => <div className="text-center">No</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Email</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => <div>{row.original.email}</div>
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
