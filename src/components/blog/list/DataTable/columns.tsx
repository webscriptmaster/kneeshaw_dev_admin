"use client";

import { useRouter } from "next/navigation";

import { ColumnDef } from "@tanstack/react-table";
import {
  LuArrowDown,
  LuArrowUp,
  LuChevronsUpDown,
  LuPencil
} from "react-icons/lu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { IBlog } from "@/types/interfaces";

import DeleteModal from "../DeleteModal";

interface Props {
  id: string;
}

function EditAction({ id }: Props) {
  const router = useRouter();

  const handleEditClick = () => {
    router.push(`/blog/edit/${id}`);
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleEditClick}>
      <LuPencil className="text-blue-500" />
    </Button>
  );
}

export const columns: ColumnDef<IBlog>[] = [
  {
    accessorKey: "no",
    size: 100,
    header: () => <div className="text-center">No</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>
  },
  {
    accessorKey: "thumbnail",
    size: 100,
    header: () => <div className="text-center">Thumbnail</div>,
    cell: ({ row }) => (
      <img
        className="rounded-md"
        src={`${process.env.NEXT_PUBLIC_API_SERVER}/${row.original.thumbnail.small}`}
        alt="Thumbnail"
      />
    )
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <div
        className="flex cursor-pointer items-center justify-start gap-2"
        onClick={() => column.toggleSorting()}
      >
        <span>Title</span>

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
            {row.original.title}
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
        <EditAction id={row.original._id ?? ""} />
        <DeleteModal data={row.original} />
      </div>
    )
  }
];
