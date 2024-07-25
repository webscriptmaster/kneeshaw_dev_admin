"use client";

import { useRouter } from "next/navigation";

import { ColumnDef } from "@tanstack/react-table";
import {
  LuArrowDown,
  LuArrowUp,
  LuChevronsUpDown,
  LuPencil
} from "react-icons/lu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { IUser } from "@/types/interfaces";

import DeleteModal from "../DeleteModal";

interface Props {
  id: string;
}

function EditAction({ id }: Props) {
  const router = useRouter();

  const handleEditClick = () => {
    router.push(`/user/edit/${id}`);
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleEditClick}>
      <LuPencil className="text-blue-500" />
    </Button>
  );
}

export const columns: ColumnDef<IUser>[] = [
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
      <div className="flex items-center justify-center">
        <Avatar className="h-[48px] w-[48px]">
          <AvatarImage
            src={`${process.env.NEXT_PUBLIC_API_SERVER}/${row.original?.avatar}`}
            alt="Avatar"
          />
          <AvatarFallback className="bg-[#AFD275] text-[18px] font-[600] text-[#EDF1F3]">
            {row.original.firstName?.[0]}
            {row.original.lastName?.[0]}
          </AvatarFallback>
        </Avatar>
      </div>
    )
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Role</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => <div>{row.original.role}</div>
  },
  {
    accessorKey: "username",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Username</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => <div>{row.original.username}</div>
  },
  {
    accessorKey: "firstName",
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
      <div>
        {row.original.firstName} {row.original.lastName}
      </div>
    )
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
    accessorKey: "phone",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Phone</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => <div>{row.original.phone}</div>
  },
  {
    accessorKey: "isActive",
    size: 100,
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-center gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Active</span>

        {!column.getIsSorted() && <LuChevronsUpDown />}
        {column.getIsSorted() === "asc" && <LuArrowUp />}
        {column.getIsSorted() === "desc" && <LuArrowDown />}
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox role="button" checked={row.original.isActive} />
      </div>
    )
  },
  {
    accessorKey: "action",
    size: 120,
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => (
      <div className="flex items-center justify-center gap-2">
        <EditAction id={row.original._id ?? ""} />
        <DeleteModal data={row.original} />
      </div>
    )
  }
];
