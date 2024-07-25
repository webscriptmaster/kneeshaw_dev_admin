"use client";

import { ColumnDef } from "@tanstack/react-table";
import { LuArrowDown, LuArrowUp, LuChevronsUpDown } from "react-icons/lu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import { IJob } from "@/types/interfaces";

import { JOB_BUDGET_MODE } from "@/utils/constants";
import DeleteModal from "../DeleteModal";

export const columns: ColumnDef<IJob>[] = [
  {
    accessorKey: "no",
    size: 100,
    header: () => <div className="text-center">No</div>,
    cell: ({ row }) => <div className="text-center">{row.index + 1}</div>
  },
  {
    accessorKey: "title",
    size: 200,
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
    cell: ({ row }) => <div>{row.original.title}</div>
  },
  {
    accessorKey: "skills",
    size: 300,
    header: () => <div className="text-left">Skills & Godot & Databases</div>,
    cell: ({ row }) => (
      <Accordion type="multiple">
        <AccordionItem
          value={`${row.original._id}_skills`}
          className="flex flex-col gap-4 border-none"
        >
          <AccordionTrigger className="py-0.5 text-left">
            Skills
          </AccordionTrigger>
          <AccordionContent>
            {row.original.skills.map((s) => (
              <Badge key={s._id} variant="outline">
                {s.name}
              </Badge>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value={`${row.original._id}_godot`}
          className="flex flex-col gap-4 border-none"
        >
          <AccordionTrigger className="py-0.5 text-left">
            Godot
          </AccordionTrigger>
          <AccordionContent>
            {row.original.godots.map((g) => (
              <Badge key={g._id} variant="outline">
                {g.name}
              </Badge>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value={`${row.original._id}_database`}
          className="flex flex-col gap-4 border-none"
        >
          <AccordionTrigger className="py-0.5 text-left">
            Database
          </AccordionTrigger>
          <AccordionContent>
            {row.original.databases.map((d) => (
              <Badge key={d._id} variant="outline">
                {d.name}
              </Badge>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  },
  {
    accessorKey: "scope",
    size: 300,
    header: () => <div className="text-left">Scope & Period & Experience</div>,
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        <div className="flex items-center">
          Scope: {row.original.scope.name}
        </div>

        <div className="flex items-center">
          Period: {row.original.period.name}
        </div>

        <div className="flex items-center">
          Experience: {row.original.experience.name}
        </div>
      </div>
    )
  },
  {
    accessorKey: "budget",
    size: 300,
    header: () => <div className="text-left">Budget & Location</div>,
    cell: ({ row }) => (
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-1">
          <span className="capitalize">{row.original.budget.mode}, </span>
          <span>
            {row.original.budget.mode === JOB_BUDGET_MODE.HOURLY
              ? `${row.original.budget.from}$/hour - ${row.original.budget.to}$/hour`
              : `${row.original.budget.from}$ - ${row.original.budget.to}$`}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1">
          <span className="uppercase">{row.original.location.mode},</span>
          <span>{row.original.location.region ?? ""}</span>
        </div>
      </div>
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
