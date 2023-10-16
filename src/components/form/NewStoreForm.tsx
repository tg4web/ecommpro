"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import formSchema from "@/components/form/formSchema";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/app/_trpc/client";
import { serverClient } from "@/app/_trpc/serverClient";

export default function NewStoreForm() {

  const addStore = trpc.createUserStore.useMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeName: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    addStore.mutate(data);
    console.log(data);
  };

  return (
    <div className="flex w-full h-screen justify-center p-2 pt-8">
      <div className="flex bg-slate-100 rounded-lg w-[85%] h-[60%] min-h-[300px]">
        <div className="flex w-full h-[100%] justify-center items-center">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="storeName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg">Store Name:</FormLabel>
                    <FormControl>
                      <Input placeholder="Store Name" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is visible on your storefront.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Create Store</Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
