"use client";

import { useFormContext } from "react-hook-form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

export default function Credits() {
  const form = useFormContext();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          Credits <span className="text-red-500">*</span>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col">
        <div className="mb-4 w-full">
          <FormField
            control={form.control}
            name="credits"
            render={({ field }) => (
              <FormItem>
                <Textarea rows={5} placeholder="Input credits" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
