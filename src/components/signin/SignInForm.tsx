"use client";

import { useRouter } from "next/navigation";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import { SITE_TITLE } from "@/utils/constants";
import useAuthStore from "@/zustand/Auth";

const FormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  password: z.string().min(8, {
    message: "Create password should be at least 8 characters"
  }),
  remember: z.boolean().default(false).optional()
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function SignInForm() {
  const router = useRouter();
  const authStore = useAuthStore();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false
    }
  });

  const onSubmit = async (values: FormSchemaType) => {
    await authStore.loginAction(values, () => {
      router.push("/");
    });
  };

  return (
    <section className="flex flex-1 items-center justify-center px-[16px] py-[36px] md:py-[40px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="bg-tertiary flex w-full max-w-[880px] flex-col gap-[24px] rounded-[24px] px-[16px] py-[32px] md:px-[80px] md:py-[40px]"
        >
          <h1 className="font-lbv text-center text-[26px] font-[700] md:text-[52px]">
            Welcome back!
          </h1>

          <p className="mb-[16px] text-center text-[16px] font-[400] md:text-[20px]">
            {SITE_TITLE} is happy to see you return.
          </p>

          <div className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Input
                    autoFocus
                    className="h-auto rounded-[16px] bg-transparent p-[12px] text-[16px] font-[500] md:p-[16px]"
                    placeholder="Enter your email"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Input
                    type="password"
                    className="h-auto rounded-[16px] bg-transparent p-[12px] text-[16px] font-[500] md:p-[16px]"
                    placeholder="Enter your password"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <Button
              type="submit"
              className="h-auto w-full rounded-[18px] bg-[#AFD275] p-[12px] text-[18px] font-[600] text-[#FFFFFF] hover:bg-[#AFD275]/80"
            >
              Sign In
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
