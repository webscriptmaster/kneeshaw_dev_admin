"use client";

import { format } from "date-fns";
import { LuTrash } from "react-icons/lu";
import JsonView from "react18-json-view";

import "react18-json-view/src/style.css";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { IDataRequest } from "@/types/interfaces";
import useDataRequestStore from "@/zustand/DataRequest";

interface Props {
  data: IDataRequest;
}

export default function DeleteModal({ data }: Props) {
  const store = useDataRequestStore();

  const handleDelete = async () => {
    await store.deleteAction(data._id ?? "", async () => {
      await store.getListAction();
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <LuTrash className="text-red-500" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Data Request</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this item?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <p>Requester:</p>
          <div className="col-span-2 flex items-center gap-2">
            <Avatar className="h-[48px] w-[48px]">
              {data.creator.avatar && (
                <AvatarImage
                  src={`${process.env.NEXT_PUBLIC_API_SERVER}/${data.creator.avatar}`}
                  alt="Avatar"
                />
              )}
              <AvatarFallback className="bg-[#AFD275] text-[18px] font-[600] text-[#EDF1F3]">
                {data.creator.firstName?.[0]}
                {data.creator.lastName?.[0]}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col gap-2">
              <p className="font-[500]">
                {data.creator.firstName} {data.creator.lastName}
              </p>
              <p className="font-[500]">{data.creator.email}</p>
            </div>
          </div>

          <p>Requested At:</p>
          <p className="col-span-2 font-[500]">
            {format(new Date(data.createdAt), "yyyy-MM-dd")}
          </p>

          <p>Available At:</p>
          <p className="col-span-2 font-[500]">
            {format(new Date(data.availableAt), "yyyy-MM-dd")}
          </p>

          <p>Data:</p>
          <div className="col-span-2 font-[500]">
            <JsonView src={JSON.parse(data.data)} theme="default" />
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>No</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
