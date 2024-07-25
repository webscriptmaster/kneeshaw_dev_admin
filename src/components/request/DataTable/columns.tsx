"use client";

import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { LuArrowDown, LuArrowUp, LuChevronsUpDown } from "react-icons/lu";
import JsonView from "react18-json-view";

import "react18-json-view/src/style.css";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IDataRequest } from "@/types/interfaces";

import DeleteModal from "../DeleteModal";

export const columns: ColumnDef<IDataRequest>[] = [
  {
    accessorKey: "no",
    size: 100,
    header: () => <div className="text-center">No</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>
  },
  {
    accessorKey: "requester",
    header: () => <div className="text-center">Requester</div>,
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Avatar className="h-[48px] w-[48px]">
          {row.original.creator.avatar && (
            <AvatarImage
              src={`${process.env.NEXT_PUBLIC_API_SERVER}/${row.original.creator.avatar}`}
              alt="Avatar"
            />
          )}
          <AvatarFallback className="bg-[#AFD275] text-[18px] font-[600] text-[#EDF1F3]">
            {row.original.creator.firstName?.[0]}
            {row.original.creator.lastName?.[0]}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col gap-2">
          <p>
            {row.original.creator.firstName} {row.original.creator.lastName}
          </p>
          <p>{row.original.creator.email}</p>
        </div>
      </div>
    )
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Requested At</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-left">
        {format(new Date(row.original.createdAt), "yyyy-MM-dd")}
      </div>
    )
  },
  {
    accessorKey: "availableAt",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Available At</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-left">
        {format(new Date(row.original.availableAt), "yyyy-MM-dd")}
      </div>
    )
  },
  {
    accessorKey: "data",
    header: () => <div className="text-center">Data</div>,
    cell: ({ row }) => (
      <JsonView src={JSON.parse(row.original.data)} theme="default" />
    )
  },
  {
    accessorKey: "action",
    size: 120,
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => (
      <div className="flex items-center justify-center gap-2">
        <DeleteModal data={row.original} />
      </div>
    )
  }
];
