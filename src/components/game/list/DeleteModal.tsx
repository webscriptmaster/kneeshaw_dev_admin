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

import { IGame } from "@/types/interfaces";
import useGameListStore from "@/zustand/GameList";

interface Props {
  data: IGame;
}

export default function DeleteModal({ data }: Props) {
  const store = useGameListStore();

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
          <AlertDialogTitle>Delete Game</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this item?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="mt-4 grid grid-cols-4 gap-4">
          <div className="col-span-4 flex justify-center">
            <img
              className="h-[80px] rounded-md"
              src={`${process.env.NEXT_PUBLIC_API_SERVER}/${data.logos?.[0]}`}
              alt="Logo"
            />
          </div>
          <p>Title:</p>
          <p className="col-span-3 font-[500]">{data.title}</p>
          <p>Description:</p>
          <p className="col-span-3 font-[500]">{data.description}</p>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>No</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
