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
import { Textarea } from "@/components/ui/textarea";
import SingleFileDnD from "@/components/_uiext/SingleFileDnD";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Overview() {
  const form = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "overview.characters"
  });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col">
        <div className="mb-4 w-full">
          <FormField
            control={form.control}
            name="overview.title"
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
            name="overview.description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Description <span className="text-red-500">*</span>
                </FormLabel>
                <Textarea rows={5} placeholder="Input description" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-4 flex w-full flex-col rounded-md border border-[#AFD275] p-4">
          <h3 className="mb-4 text-xl font-semibold">Characters</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {fields.map((item, index) => (
              <div key={item.id} className="mb-4 flex w-full flex-col">
                <div className="mb-4 w-full">
                  <FormField
                    control={form.control}
                    name={`overview.characters.${index}.thumbnail`}
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

                <div className="mb-4 w-full">
                  <FormField
                    control={form.control}
                    name={`overview.characters.${index}.title`}
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
                    name={`overview.characters.${index}.description`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <Textarea
                          rows={3}
                          placeholder="Input description"
                          {...field}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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

                <Separator className="bg-[#AFD275]" />
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col justify-end gap-4 sm:flex-row">
            <Button
              type="button"
              className="flex gap-2"
              onClick={() =>
                append({
                  thumbnail: null,
                  title: "",
                  description: ""
                })
              }
            >
              <LuPlus />
              Add New Character
            </Button>

            <Button
              type="button"
              className="flex gap-2"
              variant="destructive"
              onClick={() => remove()}
            >
              <LuTrash />
              Remove All Characters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
