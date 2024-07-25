"use client";

import clsx from "clsx";
import { format } from "date-fns";
import ISO6391 from "iso-639-1";
import { useFormContext } from "react-hook-form";
import { LuCalendar } from "react-icons/lu";
import ReactSelect from "react-select";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl
} from "@/components/ui/form";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { GAME_PLAYERS } from "@/utils/constants";

export default function MainInformation() {
  const form = useFormContext();

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Main Information</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col">
        <div className="mb-4 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
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

          <div className="w-full">
            <FormField
              control={form.control}
              name="shortTitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Title</FormLabel>
                  <Input placeholder="Input short title" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="mb-4 w-full">
          <FormField
            control={form.control}
            name="promotional"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Promotional <span className="text-red-500">*</span>
                </FormLabel>
                <Textarea rows={5} placeholder="Input promotional" {...field} />
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
            name="history"
            render={({ field }) => (
              <FormItem>
                <FormLabel>History</FormLabel>
                <Textarea rows={5} placeholder="Input history" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-4 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <FormField
              control={form.control}
              name="releaseDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Release Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={clsx(
                            "w-full",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(new Date(field.value), "yyyy-MM-dd")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <LuCalendar className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="players"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Players</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={field.value || "Select players"}
                      />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="none">(None)</SelectItem>
                      <SelectItem value={GAME_PLAYERS.SINGLE_PLAYER}>
                        {GAME_PLAYERS.SINGLE_PLAYER}
                      </SelectItem>
                      <SelectItem value={GAME_PLAYERS.MULTIPLAYER}>
                        {GAME_PLAYERS.MULTIPLAYER}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="mb-4 w-full">
          <FormField
            control={form.control}
            name="availableLanguages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Available Languages <span className="text-red-500">*</span>
                </FormLabel>
                <ReactSelect
                  hideSelectedOptions
                  isSearchable
                  isMulti
                  options={ISO6391.getLanguages(ISO6391.getAllCodes())}
                  getOptionLabel={(option: any) => option.name}
                  getOptionValue={(option: any) => option.name}
                  classNames={{
                    control: () => "!bg-transparent !py-2",
                    input: () => "!text-primary",
                    menuList: () => "!bg-tertiary",
                    option: (state) =>
                      state.isFocused ? "!bg-accent" : "!bg-tertiary",
                    multiValue: () =>
                      "!bg-transparent !border !border-[#AFD275] !rounded-md !text-[#AFD275]",
                    multiValueLabel: () => "!text-[#AFD275]"
                  }}
                  value={field.value}
                  onChange={field.onChange}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-4 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <FormField
              control={form.control}
              name="gamers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Gamers <span className="text-red-500">*</span>
                  </FormLabel>
                  <Input
                    type="number"
                    min={0}
                    placeholder="Input gamers count"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Price(USD) <span className="text-red-500">*</span>
                  </FormLabel>
                  <Input
                    type="number"
                    min={0.0}
                    step={0.01}
                    placeholder="Input price"
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="w-full">
          <FormField
            control={form.control}
            name="downloadLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Download Link <span className="text-red-500">*</span>
                </FormLabel>
                <Input placeholder="Enter download link" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
