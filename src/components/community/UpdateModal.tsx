"use client";

import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LuPencil } from "react-icons/lu";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { ICommunityJoiner } from "@/types/interfaces";
import useCommunityJoinerStore from "@/zustand/CommunityJoiner";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address"
  })
});

type FormSchemaType = z.infer<typeof FormSchema>;

interface Props {
  data: ICommunityJoiner;
}

export default function UpdateModal({ data }: Props) {
  const store = useCommunityJoinerStore();

  const [open, setOpen] = useState(false);

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: data.email
    }
  });

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (values: FormSchemaType) => {
    await store.updateAction(data._id ?? "", values, async () => {
      await store.getListAction();
      setOpen(false);
      form.reset();
    });
  };

  useEffect(() => {
    form.reset(data);
  }, [data]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <LuPencil className="text-blue-500" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>Update Community Joiner</DialogTitle>
            </DialogHeader>

            <div className="flex flex-col gap-4 py-4">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email <span className="text-red-500">*</span>
                      </FormLabel>
                      <Input {...field} />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
