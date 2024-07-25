"use client";

import { ColumnDef } from "@tanstack/react-table";
import { LuArrowDown, LuArrowUp, LuChevronsUpDown } from "react-icons/lu";

import { Checkbox } from "@/components/ui/checkbox";

import { IFeedback } from "@/types/interfaces";

import UpdateModal from "../UpdateModal";
import DeleteModal from "../DeleteModal";

export const columns: ColumnDef<IFeedback>[] = [
  {
    accessorKey: "no",
    size: 100,
    header: () => <div className="text-center">No</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>
  },
  {
    accessorKey: "fullName",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Full Name</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => <div className="text-left">{row.original.fullName}</div>
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
    cell: ({ row }) => <div className="text-left">{row.original.email}</div>
  },
  {
    accessorKey: "message",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Message</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => <div className="text-left">{row.original.message}</div>
  },
  {
    accessorKey: "from",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>From</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => <div className="text-left">{row.original.from}</div>
  },
  {
    accessorKey: "link",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Link</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => (
      <a className="text-[#AFD275]" href={row.original.link} target="_blank">
        {row.original.link}
      </a>
    )
  },
  {
    accessorKey: "isRead",
    size: 100,
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-center gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Read</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox role="button" checked={row.original.isRead} />
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
