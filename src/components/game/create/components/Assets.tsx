"use client";

import { useFormContext } from "react-hook-form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import SingleFileDnD from "@/components/_uiext/SingleFileDnD";
import MultiFileDnD from "@/components/_uiext/MultiFileDnD";

export default function Assets() {
  const form = useFormContext();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Assets</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col">
        <div className="mb-4 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <FormField
              control={form.control}
              name="banner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Banner <span className="text-red-500">*</span>
                  </FormLabel>
                  <SingleFileDnD {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="mb-4 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <FormField
              control={form.control}
              name="splash"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Splash <span className="text-red-500">*</span>
                  </FormLabel>
                  <SingleFileDnD {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="thumbnail"
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
        </div>

        <div className="mb-4 w-full">
          <FormField
            control={form.control}
            name="logos"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Logos <span className="text-red-500">*</span>
                </FormLabel>
                <MultiFileDnD {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-4 w-full">
          <FormField
            control={form.control}
            name="screenshots"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Screenshots <span className="text-red-500">*</span>
                </FormLabel>
                <MultiFileDnD {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
