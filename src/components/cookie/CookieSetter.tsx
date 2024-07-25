/* eslint-disable react/no-danger */

"use client";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { LuPlus } from "react-icons/lu";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";

import useCookieConsentStore from "@/zustand/CookieConsent";

const FormSchema = z.object({
  description: z.string().min(1, { message: "Description is required" }),
  acceptLabel: z.string().min(1, { message: "Accept label is required" }),
  declineLabel: z.string().min(1, { message: "Decline label is required" }),
  position: z.string().min(1, { message: "Position is required" })
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function CookieSetter() {
  const store = useCookieConsentStore();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      description: "",
      acceptLabel: "",
      declineLabel: "",
      position: ""
    }
  });

  const initialize = async () => {
    await store.getAction();
  };

  const onSubmit = async (values: FormSchemaType) => {
    await store.updateAction(values, async () => {
      await store.getAction();
    });
  };

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    if (store.cookieConsent) {
      form.reset(store.cookieConsent);
    }
  }, [store.cookieConsent]);

  return (
    <Form {...form}>
      <form
        className="flex flex-1 flex-col"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="mb-4 flex justify-end">
          <Button className="flex items-center gap-2">
            <LuPlus />
            Save
          </Button>
        </div>

        <div className="flex flex-col">
          <div className="mb-4 w-full">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Description <span className="text-red-500">*</span>
                  </FormLabel>
                  <Textarea {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mb-4 flex flex-col gap-4 md:flex-row">
            <div className="w-full">
              <FormField
                control={form.control}
                name="acceptLabel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Accept Label <span className="text-red-500">*</span>
                    </FormLabel>
                    <Input {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full">
              <FormField
                control={form.control}
                name="declineLabel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Decline Label <span className="text-red-500">*</span>
                    </FormLabel>
                    <Input {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="mb-4 w-full">
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel>
                    Position <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="flex flex-col gap-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="top" />
                        </FormControl>
                        <FormLabel className="font-normal">Top</FormLabel>
                      </FormItem>

                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="bottom" />
                        </FormControl>
                        <FormLabel className="font-normal">Bottom</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="relative flex w-full flex-col gap-4 rounded-md border">
            <Skeleton className="h-20 w-full" />

            <Skeleton className="h-80 w-full" />

            <Skeleton className="h-20 w-full" />

            <div
              className={clsx(
                "absolute flex w-full flex-col bg-card p-4 md:p-8",
                form.watch("position") === "bottom" ? "bottom-0" : "top-0"
              )}
            >
              <p
                className="mb-4 text-[14px] md:text-[16px] lg:text-[18px]"
                dangerouslySetInnerHTML={{
                  __html: form.watch("description")
                }}
              />

              <div className="flex justify-end gap-4">
                <Button className="bg-transparent" variant="outline">
                  {form.watch("declineLabel")}
                </Button>

                <Button
                  className="border-[#AFD275] bg-transparent text-[#AFD275]"
                  variant="outline"
                >
                  {form.watch("acceptLabel")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}
