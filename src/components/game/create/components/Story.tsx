"use client";

import { useFormContext } from "react-hook-form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Story() {
  const form = useFormContext();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Story</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col">
        <div className="mb-4 w-full">
          <FormField
            control={form.control}
            name="story.title"
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
            name="story.description"
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
      </CardContent>
    </Card>
  );
}
