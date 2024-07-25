"use client";

import { Table } from "@tanstack/react-table";
import {
  LuChevronLeft,
  LuChevronRight,
  LuChevronsLeft,
  LuChevronsRight
} from "react-icons/lu";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface Props<TData> {
  table: Table<TData>;
}

export default function Pagination<TData>({ table }: Props<TData>) {
  return (
    <div className="flex items-center justify-end gap-2">
      <div className="flex items-center gap-2">
        <Label>Rows per page:</Label>

        <Select
          value={table.getState().pagination.pageSize.toString()}
          onValueChange={(value) => {
            table.setPageSize(Number(value));
          }}
        >
          <SelectTrigger className="w-[80px]">
            <SelectValue placeholder={table.getState().pagination.pageSize} />
          </SelectTrigger>

          <SelectContent>
            {[5, 10, 25, 50, 100].map((pageSize) => (
              <SelectItem key={pageSize} value={pageSize.toString()}>
                {pageSize}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="px-4">
        <Label>
          {table.getState().pagination.pageIndex *
            table.getState().pagination.pageSize +
            1}{" "}
          -{" "}
          {(table.getState().pagination.pageIndex + 1) *
            table.getState().pagination.pageSize <
          table.getRowCount()
            ? (table.getState().pagination.pageIndex + 1) *
              table.getState().pagination.pageSize
            : table.getRowCount()}{" "}
          of {table.getRowCount()}
        </Label>
      </div>

      <Button
        size="sm"
        onClick={() => table.firstPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <LuChevronsLeft />
      </Button>

      <Button
        size="sm"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <LuChevronLeft />
      </Button>

      <Button
        size="sm"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <LuChevronRight />
      </Button>

      <Button
        size="sm"
        onClick={() => table.lastPage()}
        disabled={!table.getCanNextPage()}
      >
        <LuChevronsRight />
      </Button>
    </div>
  );
}
