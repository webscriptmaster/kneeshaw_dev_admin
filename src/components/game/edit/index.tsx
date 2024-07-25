"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import ISO6391 from "iso-639-1";
import { FormProvider, useForm } from "react-hook-form";
import { LuCornerUpLeft, LuGamepad2, LuSave } from "react-icons/lu";
import * as z from "zod";

import PageLayout from "@/components/_layout/_page";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import useGameListStore from "@/zustand/GameList";

import Allow from "./components/Allow";
import CategoryPlatform from "./components/CategoryPlatform";
import MainInformation from "./components/MainInformation";
import Assets from "./components/Assets";
import Overview from "./components/Overview";
import Features from "./components/Features";
import Story from "./components/Story";
import Videos from "./components/Videos";
import Credits from "./components/Credits";

const FormSchema = z.object({
  enabled: z.boolean().default(false).optional(),

  category: z.string().optional(),
  platform: z.string().optional(),

  title: z.string().min(1, {
    message: "Title is required"
  }),
  shortTitle: z.string().optional(),
  promotional: z.string().min(1, {
    message: "Promotional is required"
  }),
  description: z.string().min(1, {
    message: "Description is required"
  }),
  history: z.string().optional(),
  releaseDate: z.date().optional(),
  players: z.string().optional(),
  availableLanguages: z.array(z.any()),
  gamers: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Expected number, received a string"
  }),
  price: z.string().refine((val) => !Number.isNaN(parseFloat(val)), {
    message: "Expected number, received a string"
  }),
  downloadLink: z.string().url({ message: "Download link is required" }),

  banner: z.any().refine((file) => file !== null, "Banner is required"),
  splash: z.any().refine((file) => file !== null, "Splash is required"),
  logos: z
    .any()
    .refine((files) => files.length >= 1, "More than 1 logo is required"),
  thumbnail: z.any().refine((file) => file !== null, "Thumbnail is required"),
  screenshots: z
    .any()
    .refine(
      (files) => files.length >= 3,
      "More than 3 screenshots are required"
    ),

  overview: z.object({
    title: z.string().min(1, { message: "Title is required" }),
    description: z.string().min(1, { message: "Description is required" }),
    characters: z.array(
      z.object({
        thumbnail: z
          .any()
          .refine((file) => file !== null, "Thumbnail is required"),
        title: z.string().min(1, { message: "Title is required" }),
        description: z.string().optional()
      })
    )
  }),

  features: z.array(
    z.object({
      thumbnail: z
        .any()
        .refine((file) => file !== null, "Thumbnail is required"),
      title: z.string().min(1, { message: "Title is required" }),
      description: z.string().min(1, { message: "Description is required" })
    })
  ),

  story: z.object({
    title: z.string().min(1, { message: "Title is required" }),
    description: z.string().min(1, { message: "Description is required" })
  }),

  videos: z.array(
    z.object({
      thumbnail: z
        .any()
        .refine((file) => file !== null, "Thumbnail is required"),
      title: z.string().min(1, { message: "Title is required" }),
      src: z.string().url({ message: "Source is required" })
    })
  ),

  credits: z.string().min(1, {
    message: "Credits is required"
  })
});

type FormSchemaType = z.infer<typeof FormSchema>;

interface Props {
  id: string;
}

export default function GameEdit({ id }: Props) {
  const router = useRouter();
  const store = useGameListStore();

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      enabled: false,

      category: undefined,
      platform: undefined,

      title: "",
      shortTitle: "",
      promotional: "",
      description: "",
      history: "",
      releaseDate: undefined,
      players: undefined,
      availableLanguages: [],
      gamers: "0",
      price: "0.00",
      downloadLink: "",

      banner: null,
      splash: null,
      logos: [],
      thumbnail: null,
      screenshots: [],

      overview: {
        title: "",
        description: "",
        characters: [
          {
            thumbnail: null,
            title: "",
            description: ""
          }
        ]
      },

      features: [
        {
          thumbnail: null,
          title: "",
          description: ""
        }
      ],

      story: {
        title: "",
        description: ""
      },

      videos: [
        {
          thumbnail: null,
          title: "",
          src: ""
        }
      ],

      credits: ""
    }
  });

  const handleReturnClick = () => {
    router.back();
  };

  const onSubmit = async (values: FormSchemaType) => {
    const { availableLanguages, ...rest } = values;
    await store.updateAction(
      id,
      {
        ...rest,
        availableLanguages: availableLanguages.map((al: any) => al?.name)
      },
      () => {
        router.push("/game/list");
      }
    );
  };

  const initialize = async () => {
    const game = await store.getAction(id);
    if (game?._id) {
      form.reset({
        ...game,
        category:
          typeof game.category === "string"
            ? game.category
            : game.category?._id,
        platform:
          typeof game.platform === "string"
            ? game.platform
            : game.platform?._id,
        releaseDate: game.releaseDate ? new Date(game.releaseDate) : undefined,
        players: game.players ?? undefined,
        gamers: game.gamers.toString(),
        price: game.price.toString(),
        availableLanguages: ISO6391.getLanguages(ISO6391.getAllCodes()).filter(
          (al: any) => game.availableLanguages.includes(al.name)
        )
      });
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <PageLayout>
      <div className="flex flex-1 flex-col gap-[12px] lg:gap-[24px]">
        <div className="flex items-center justify-start gap-2">
          <LuGamepad2 className="text-[24px] lg:text-[32px]" />
          <h2 className="font-lbv text-[24px] font-[700] lg:text-[32px]">
            Game / Edit
          </h2>
        </div>

        <div className="flex flex-1 flex-col gap-4 rounded-[8px] bg-tertiary p-4">
          <FormProvider {...form}>
            <Form {...form}>
              <form
                className="flex flex-1 flex-col gap-8"
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

                <CategoryPlatform />

                <MainInformation />

                <Assets />

                <Overview />

                <Features />

                <Story />

                <Videos />

                <Credits />
              </form>
            </Form>
          </FormProvider>
        </div>
      </div>
    </PageLayout>
  );
}
