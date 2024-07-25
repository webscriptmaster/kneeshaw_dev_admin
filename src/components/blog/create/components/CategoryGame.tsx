"use client";

import { useEffect } from "react";

import { useFormContext } from "react-hook-form";
import { IoBanOutline } from "react-icons/io5";

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

import useBlogCategoryStore from "@/zustand/BlogCategory";
import useGameListStore from "@/zustand/GameList";

export default function CategoryGame() {
  const form = useFormContext();
  const categoryStore = useBlogCategoryStore();
  const gameStore = useGameListStore();

  useEffect(() => {
    categoryStore.getListAction();
    gameStore.getListAction();
  }, []);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Category & Game</CardTitle>
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
                        categoryStore.blogCategories.find(
                          (bc) => bc._id === field.value
                        )?.name || "Select a category"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="none">(None)</SelectItem>
                    {categoryStore.blogCategories.map((bc) => (
                      <SelectItem key={bc._id} value={bc._id ?? ""}>
                        {bc.name}
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
            name="game"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Game</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        gameStore.games.find((g) => g._id === field.value)
                          ?.title || "Select a game"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="none">
                      <div className="flex items-center gap-2">
                        <IoBanOutline className="h-10 w-10" />
                        <span>(None)</span>
                      </div>
                    </SelectItem>
                    {gameStore.games.map((g) => (
                      <SelectItem key={g._id} value={g._id ?? ""}>
                        <div className="flex items-center gap-2">
                          <img
                            className="h-10 w-10"
                            src={`${process.env.NEXT_PUBLIC_API_SERVER}/${g.logos?.[0]}`}
                            alt={g.title}
                          />
                          <span>{g.title}</span>
                        </div>
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
