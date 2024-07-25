"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { LuPlus, LuTrash } from "react-icons/lu";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import SingleFileDnD from "@/components/_uiext/SingleFileDnD";

interface Props {
  name: string;
}

function Items({ name }: Props) {
  const form = useFormContext();

  const { fields, remove, append } = useFieldArray({
    control: form.control,
    name
  });

  return (
    <div className="mb-4 w-full rounded-md border p-4 pb-2">
      <div className="mb-4 flex items-center">
        <div className="flex-1">
          <FormLabel className="flex gap-2">
            <span>Items</span>
            <span className="text-red-500">*</span>
          </FormLabel>
        </div>

        <div className="flex w-full flex-col justify-end gap-4 sm:flex-row">
          <Button
            type="button"
            className="flex gap-2"
            onClick={() => append(" ")}
          >
            <LuPlus />
            Add New Item
          </Button>

          <Button
            type="button"
            className="flex gap-2"
            variant="destructive"
            onClick={() => remove()}
          >
            <LuTrash />
            Remove All Item
          </Button>
        </div>
      </div>

      {fields.map((item, index) => (
        <div key={item.id} className="mb-2 flex items-center gap-2">
          <div className="flex-1">
            <FormField
              control={form.control}
              name={`${name}.${index}`}
              render={({ field }) => (
                <FormItem>
                  <Input placeholder="Input item" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="button"
            variant="destructive"
            onClick={() => remove(index)}
          >
            <LuTrash />
          </Button>
        </div>
      ))}
    </div>
  );
}

export default function Features() {
  const form = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "features"
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Features</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col">
        {fields.map((item, index) => (
          <div key={item.id} className="mb-4 flex w-full flex-col">
            <div className="mb-4 w-full">
              <FormField
                control={form.control}
                name={`features.${index}.title`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Title <span className="text-red-500">*</span>
                    </FormLabel>
                    <Input placeholder="Input title" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="mb-4 w-full">
              <FormField
                control={form.control}
                name={`features.${index}.thumbnail`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Thumbnail <span className="text-red-500">*</span>
                    </FormLabel>
                    <SingleFileDnD {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Items name={`features.${index}.items`} />

            <div className="mb-4 flex justify-end">
              <Button
                type="button"
                variant="destructive"
                className="flex gap-2"
                onClick={() => remove(index)}
              >
                <LuTrash />
                Delete
              </Button>
            </div>

            <Separator className="bg-orange-500" />
          </div>
        ))}

        <div className="flex w-full flex-col justify-end gap-4 sm:flex-row">
          <Button
            type="button"
            className="flex gap-2"
            onClick={() =>
              append({
                title: "",
                thumbnail: null,
                items: [" ", " ", " "]
              })
            }
          >
            <LuPlus />
            Add New Feature
          </Button>

          <Button
            type="button"
            className="flex gap-2"
            variant="destructive"
            onClick={() => remove()}
          >
            <LuTrash />
            Remove All Features
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
