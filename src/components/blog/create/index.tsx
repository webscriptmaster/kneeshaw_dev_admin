"use client";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { LuCornerUpLeft, LuRss, LuSave } from "react-icons/lu";
import * as z from "zod";

import PageLayout from "@/components/_layout/_page";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import useBlogListStore from "@/zustand/BlogList";

import CategoryGame from "./components/CategoryGame";
import MainInformation from "./components/MainInformation";
import ThumbnailsScreenshots from "./components/ThumbnailsScreenshots";
import Features from "./components/Features";
import Allow from "./components/Allow";

const FormSchema = z.object({
  enabled: z.boolean().default(false).optional(),

  category: z.string().optional(),
  game: z.string().optional(),

  title: z.string().min(1, {
    message: "Title is required"
  }),
  description: z.string().min(1, {
    message: "Description is required"
  }),
  details: z.string().min(1, {
    message: "Details is required"
  }),

  thumbnail: z.object({
    small: z
      .any()
      .refine((file) => file !== null, "Small thumbnail is required"),
    large: z
      .any()
      .refine((file) => file !== null, "Large thumbnail is required")
  }),
  screenshots: z
    .any()
    .refine(
      (files) => files.length >= 3,
      "More than 3 screenshots are required"
    ),

  features: z.array(
    z.object({
      title: z.string().min(1, { message: "Title is required" }),
      thumbnail: z
        .any()
        .refine((file) => file !== null, "Thumbnail is required"),
      items: z.array(z.string().min(1, { message: "Item is required" }))
    })
  )
});

type FormSchemaType = z.infer<typeof FormSchema>;

export default function BlogCreate() {
  const router = useRouter();
  const store = useBlogListStore();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      enabled: false,

      category: undefined,
      game: undefined,

      title: "",
      description: "",
      details: "",

      thumbnail: {
        small: null,
        large: null
      },
      screenshots: [],

      features: [
        {
          title: "",
          thumbnail: null,
          items: [" ", " ", " "]
        }
      ]
    }
  });

  const handleReturnClick = () => {
    router.back();
  };

  const onSubmit = async (values: FormSchemaType) => {
    await store.createAction(values, () => {
      router.push("/blog/list");
    });
  };

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-[12px] lg:gap-[24px]">
        <div className="flex items-center justify-start gap-2">
          <LuRss className="text-[24px] lg:text-[32px]" />
          <h2 className="font-lbv text-[24px] font-[700] lg:text-[32px]">
            Blog / Create
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

                <Allow />

                <CategoryGame />

                <MainInformation />

                <ThumbnailsScreenshots />

                <Features />
              </form>
            </Form>
          </FormProvider>
        </div>
      </div>
    </PageLayout>
  );
}
