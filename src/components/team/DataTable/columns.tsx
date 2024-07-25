"use client";

import { ColumnDef } from "@tanstack/react-table";
import { LuArrowDown, LuArrowUp, LuChevronsUpDown } from "react-icons/lu";

import { Checkbox } from "@/components/ui/checkbox";
import { ITeamMember } from "@/types/interfaces";

import UpdateModal from "../UpdateModal";
import DeleteModal from "../DeleteModal";

export const columns: ColumnDef<ITeamMember>[] = [
  {
    accessorKey: "no",
    size: 100,
    header: () => <div className="text-center">No</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>
  },
  {
    accessorKey: "avatar",
    size: 100,
    header: () => <div className="text-center">Avatar</div>,
    cell: ({ row }) => (
      <img
        className="rounded-md"
        src={`${process.env.NEXT_PUBLIC_API_SERVER}/${row.original.avatar}`}
        alt="Avatar"
      />
    )
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>First Name</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => <div className="text-left">{row.original.firstName}</div>
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Last Name</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => <div className="text-left">{row.original.lastName}</div>
  },
  {
    accessorKey: "position",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Position</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => <div className="text-left">{row.original.position}</div>
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
    accessorKey: "memo",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Memo</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => <div className="text-left">{row.original.memo}</div>
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
