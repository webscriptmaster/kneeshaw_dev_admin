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

import { IFeedback } from "@/types/interfaces";
import useFeedbackStore from "@/zustand/Feedback";

interface Props {
  data: IFeedback;
}

export default function DeleteModal({ data }: Props) {
  const store = useFeedbackStore();

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
          <AlertDialogTitle>Delete Feedback</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this item?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="mt-4 grid grid-cols-4 gap-4">
          <p>Full Name:</p>
          <p className="col-span-3 font-[500]">{data.fullName}</p>
          <p>Email:</p>
          <p className="col-span-3 font-[500]">{data.email}</p>
          <p>Message:</p>
          <p className="col-span-3 font-[500]">{data.message}</p>
          <p>From:</p>
          <p className="col-span-3 font-[500]">{data.from}</p>
          <p>Link:</p>
          <p className="col-span-3 font-[500]">
            <a className="text-[#AFD275]" href={data.link} target="_blank">
              {data.link}
            </a>
          </p>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>No</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
