"use client";

import { useEffect } from "react";

import { useFormContext } from "react-hook-form";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import useGameCategoryStore from "@/zustand/GameCategory";
import useGamePlatformStore from "@/zustand/GamePlatform";

export default function CategoryPlatform() {
  const form = useFormContext();
  const categoryStore = useGameCategoryStore();
  const platformStore = useGamePlatformStore();

  useEffect(() => {
    categoryStore.getListAction();
    platformStore.getListAction();
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Category & Platform</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 md:flex-row">
        <div className="w-full">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        categoryStore.gameCategories.find(
                          (gc) => gc._id === field.value
                        )?.name || "Select a category"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="none">(None)</SelectItem>
                    {categoryStore.gameCategories.map((gc) => (
                      <SelectItem key={gc._id} value={gc._id ?? ""}>
                        {gc.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="w-full">
          <FormField
            control={form.control}
            name="platform"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Platform</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        platformStore.gamePlatforms.find(
                          (gp) => gp._id === field.value
                        )?.name || "Select a platform"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="none">(None)</SelectItem>
                    {platformStore.gamePlatforms.map((gp) => (
                      <SelectItem key={gp._id} value={gp._id ?? ""}>
                        {gp.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
