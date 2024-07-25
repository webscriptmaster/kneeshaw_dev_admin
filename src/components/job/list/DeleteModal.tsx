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

import { IJob } from "@/types/interfaces";
import useJobListStore from "@/zustand/JobList";
import { Badge } from "@/components/ui/badge";
import { JOB_BUDGET_MODE } from "@/utils/constants";

interface Props {
  data: IJob;
}

export default function DeleteModal({ data }: Props) {
  const store = useJobListStore();

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
          <AlertDialogTitle>Delete Job Skill</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this item?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="mt-4 grid grid-cols-4 gap-4">
          <p>Title:</p>
          <p className="col-span-3 font-[500]">{data.title}</p>

          <p>Skills:</p>
          <div className="col-span-3">
            {data.skills.map((s) => (
              <Badge key={s._id} variant="outline">
                {s.name}
              </Badge>
            ))}
          </div>

          <p>Godots:</p>
          <div className="col-span-3">
            {data.godots.map((g) => (
              <Badge key={g._id} variant="outline">
                {g.name}
              </Badge>
            ))}
          </div>

          <p>Databases:</p>
          <div className="col-span-3">
            {data.databases.map((d) => (
              <Badge key={d._id} variant="outline">
                {d.name}
              </Badge>
            ))}
          </div>

          <p>Scope:</p>
          <div className="col-span-3">{data.scope.name}</div>

          <p>Period:</p>
          <div className="col-span-3">{data.period.name}</div>

          <p>Experience:</p>
          <div className="col-span-3">{data.experience.name}</div>

          <p>Budget:</p>
          <div className="col-span-3">
            <span className="capitalize">{data.budget.mode}, </span>
            {data.budget.mode === JOB_BUDGET_MODE.HOURLY
              ? `${data.budget.from}$/hour - ${data.budget.to}$/hour`
              : `${data.budget.from}$ - ${data.budget.to}$`}
          </div>

          <p>Location:</p>
          <div className="col-span-3">
            <span className="uppercase">{data.location.mode}</span>,{" "}
            {data.location.region}
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
