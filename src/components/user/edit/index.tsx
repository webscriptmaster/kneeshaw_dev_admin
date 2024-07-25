"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { LuCornerUpLeft, LuSave, LuUsers } from "react-icons/lu";
import * as z from "zod";

import PageLayout from "@/components/_layout/_page";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import useUserStore from "@/zustand/User";

import Information from "./Information";

const FormSchema = z.object({
  isActive: z.boolean(),

  avatar: z.any().optional(),

  role: z.string().min(1, {
    message: "Role is required"
  }),
  username: z.string().min(1, {
    message: "Username is required"
  }),

  firstName: z.string().min(1, {
    message: "FirstName is required"
  }),
  lastName: z.string().min(1, {
    message: "LastName is required"
  }),
  email: z.string().email({
    message: "Email is required"
  }),
  phone: z.string().min(1, {
    message: "Phone is required"
  }),

  memo: z.string().optional()
});

type FormSchemaType = z.infer<typeof FormSchema>;

interface Props {
  id: string;
}

export default function UserEdit({ id }: Props) {
  const router = useRouter();
  const store = useUserStore();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      avatar: null,

      role: "",
      isActive: true,

      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      username: "",
      memo: ""
    }
  });

  const handleReturnClick = () => {
    router.back();
  };

  const onSubmit = async (values: FormSchemaType) => {
    await store.updateAction(id, values, () => {
      router.push("/user/list");
    });
  };

  const initialize = async () => {
    const user = await store.getAction(id);
    if (user?._id) {
      form.reset(user);
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-[12px] lg:gap-[24px]">
        <div className="flex items-center justify-start gap-2">
          <LuUsers className="text-[24px] lg:text-[32px]" />
          <h2 className="font-lbv text-[24px] font-[700] lg:text-[32px]">
            User / Edit
          </h2>
        </div>

        <div className="flex flex-1 flex-col gap-4 rounded-[8px] bg-tertiary p-4">
          <FormProvider {...form}>
            <Form {...form}>
              <form
                className="flex flex-1 flex-col gap-4"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <div className="flex w-full justify-end gap-4">
                  <Button className="flex items-center gap-2" type="submit">
                    <LuSave />
                    Save
                  </Button>
                  <Button
                    className="flex items-center gap-2"
                    type="button"
                    variant="outline"
                    onClick={handleReturnClick}
                  >
                    <LuCornerUpLeft />
                    Return
                  </Button>
                </div>

                <Information />
              </form>
            </Form>
          </FormProvider>
        </div>
      </div>
    </PageLayout>
  );
}
