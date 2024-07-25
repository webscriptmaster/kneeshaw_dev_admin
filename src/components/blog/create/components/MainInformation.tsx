"use client";

import { useFormContext } from "react-hook-form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

export default function MainInformation() {
  const form = useFormContext();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Main Information</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col">
        <div className="mb-4 w-full">
          <FormField
            control={form.control}
            name="title"
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
            name="description"
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

        <div className="mb-4 w-full">
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Details <span className="text-red-500">*</span>
                </FormLabel>
                <Textarea rows={5} placeholder="Input details" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
