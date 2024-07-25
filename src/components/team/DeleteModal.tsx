"use client";

import { LuTrash } from "react-icons/lu";

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
import { Checkbox } from "@/components/ui/checkbox";

import { ITeamMember } from "@/types/interfaces";
import useTeamMemberStore from "@/zustand/TeamMember";

interface Props {
  data: ITeamMember;
}

export default function DeleteModal({ data }: Props) {
  const store = useTeamMemberStore();

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
          <AlertDialogTitle>Delete Member</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this item?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="mt-4 grid grid-cols-4 gap-4">
          <div className="col-span-4 flex justify-center">
            <img
              className="h-[80px] rounded-md"
              src={`${process.env.NEXT_PUBLIC_API_SERVER}/${data.avatar}`}
              alt="Avatar"
            />
          </div>

          <p>Full Name:</p>
          <p className="col-span-3 font-[500]">
            {data.firstName} {data.lastName}
          </p>

          <p>Position:</p>
          <p className="col-span-3 font-[500]">{data.position}</p>

          <p>Enabled:</p>
          <p className="col-span-3 font-[500]">
            <Checkbox role="button" checked={data.enabled} />
          </p>

          <p>Memo:</p>
          <p className="col-span-3 font-[500]">{data.memo}</p>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>No</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
