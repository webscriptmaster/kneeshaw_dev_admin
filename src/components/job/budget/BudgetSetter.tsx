"use client";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LuPlus } from "react-icons/lu";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import useJobBudgetStore from "@/zustand/JobBudget";

const FormSchema = z.object({
  fixedMin: z
    .any()
    .refine(
      (val) => !Number.isNaN(parseInt(val, 10)),
      "Expected number, received a string"
    ),
  fixedMax: z
    .any()
    .refine(
      (val) => !Number.isNaN(parseInt(val, 10)),
      "Expected number, received a string"
    ),
  rateMin: z
    .any()
    .refine(
      (val) => !Number.isNaN(parseInt(val, 10)),
      "Expected number, received a string"
    ),
  rateMax: z
    .any()
    .refine(
      (val) => !Number.isNaN(parseInt(val, 10)),
      "Expected number, received a string"
    )
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function BudgetSetter() {
  const store = useJobBudgetStore();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fixedMin: "0",
      fixedMax: "0",
      rateMin: "0",
      rateMax: "0"
    }
  });

  const onSubmit = async (values: FormSchemaType) => {
    await store.updateAction(values, async () => {
      await store.getAction();
    });
  };

  useEffect(() => {
    store.getAction();
  }, []);

  useEffect(() => {
    if (store.jobBudget) {
      form.reset(store.jobBudget);
    }
  }, [store.jobBudget]);

  return (
    <Form {...form}>
      <form
        className="flex flex-1 flex-col"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="mb-16 flex justify-end">
          <Button className="flex items-center gap-2">
            <LuPlus />
            Save
          </Button>
        </div>

        <h3 className="mb-8 text-xl font-semibold">Fixed Budget:</h3>

        <div className="mb-8 grid grid-cols-4 items-center gap-4">
          <Label className="text-center">Min:</Label>
          <div className="col-span-3">
            <FormField
              control={form.control}
              name="fixedMin"
              render={({ field }) => (
                <FormItem>
                  <Input
                    autoFocus
                    type="number"
                    placeholder="Input min"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Label className="text-center">Max:</Label>
          <div className="col-span-3">
            <FormField
              control={form.control}
              name="fixedMax"
              render={({ field }) => (
                <FormItem>
                  <Input type="number" placeholder="Input max" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <h3 className="mb-8 text-xl font-semibold">Hourly rate:</h3>

        <div className="mb-8 grid grid-cols-4 items-center gap-4">
          <Label className="text-center">Min:</Label>
          <div className="col-span-3">
            <FormField
              control={form.control}
              name="rateMin"
              render={({ field }) => (
                <FormItem>
                  <Input type="number" placeholder="Input min" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Label className="text-center">Max:</Label>
          <div className="col-span-3">
            <FormField
              control={form.control}
              name="rateMax"
              render={({ field }) => (
                <FormItem>
                  <Input type="number" placeholder="Input max" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
}
