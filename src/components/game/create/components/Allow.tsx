"use client";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

export default function Allow() {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="enabled"
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between gap-4 rounded-md border p-4">
          <div className="space-y-1">
            <FormLabel>Enable / Disable</FormLabel>
            <FormDescription>
              Enable or disable this item on the User Portal.
            </FormDescription>
          </div>
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
