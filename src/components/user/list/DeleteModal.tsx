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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IUser } from "@/types/interfaces";
import useUserStore from "@/zustand/User";

interface Props {
  data: IUser;
}

export default function DeleteModal({ data }: Props) {
  const store = useUserStore();

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
          <AlertDialogTitle>Delete User</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this item?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="mt-4 grid grid-cols-4 gap-4">
          <div className="col-span-4 flex justify-center">
            <Avatar className="h-[48px] w-[48px]">
              <AvatarImage
                src={`${process.env.NEXT_PUBLIC_API_SERVER}/${data?.avatar}`}
                alt="Avatar"
              />
              <AvatarFallback className="bg-[#AFD275] text-[18px] font-[600] text-[#EDF1F3]">
                {data.firstName?.[0]}
                {data.lastName?.[0]}
              </AvatarFallback>
            </Avatar>
          </div>
          <p>Email:</p>
          <p className="col-span-3 font-[500]">{data.email}</p>
          <p>Name:</p>
          <p className="col-span-3 font-[500]">
            {data.firstName} {data.lastName}
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
