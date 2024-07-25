"use client";

import { useFormContext } from "react-hook-form";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import SingleFileDnD from "@/components/_uiext/SingleFileDnD";
import { Textarea } from "@/components/ui/textarea";

export default function Information() {
  const form = useFormContext();

  return (
    <Card className="w-full">
      <CardContent className="flex flex-col p-4">
        <div className="mb-4 w-full">
          <FormField
            control={form.control}
            name="isActive"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Active</FormLabel>
                <div className="flex items-center gap-2">
                  <Checkbox
                    className="h-10 w-10"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-4 w-full">
          <FormField
            control={form.control}
            name="avatar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Avatar</FormLabel>
                <div className="flex items-center gap-4">
                  <Avatar className="h-[48px] w-[48px]">
                    <AvatarImage
                      src={`${process.env.NEXT_PUBLIC_API_SERVER}/${field.value}`}
                      alt="Avatar"
                    />
                    <AvatarFallback className="bg-[#AFD275] text-[18px] font-[600] text-[#EDF1F3]">
                      {form.getValues().firstName?.[0]}
                      {form.getValues().lastName?.[0]}
                    </AvatarFallback>
                  </Avatar>

                  <SingleFileDnD {...field} />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mb-4 flex flex-col gap-4 md:flex-row">
          <div className="w-full">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue
                        placeholder={field.value || "Select a role"}
                      />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      {["admin", "developer", "gamer"].map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Username <span className="text-red-500">*</span>
                  </FormLabel>
                  <Input placeholder="Input username" {...field} />
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
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    FirstName <span className="text-red-500">*</span>
                  </FormLabel>
                  <Input placeholder="Input first name" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    LastName <span className="text-red-500">*</span>
                  </FormLabel>
                  <Input placeholder="Input Last name" {...field} />
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email <span className="text-red-500">*</span>
                  </FormLabel>
                  <Input placeholder="Input email" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Phone <span className="text-red-500">*</span>
                  </FormLabel>
                  <Input placeholder="Input phone" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="w-full">
          <FormField
            control={form.control}
            name="memo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Memo</FormLabel>
                <Textarea rows={5} placeholder="Input memo" {...field} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </CardContent>
    </Card>
  );
}
