"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Check, Phone, ShoppingBag } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";

const cardPackage = [
  {
    title: "NANO",
    content: (
      <>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Domain (.com){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Halaman (1 Halaman){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Support (Support & Maintanance){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Email (2 Email){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Garansi (1 Tahun){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Design (Design simple){" "}
        </p>
      </>
    ),
    price: "Rp.500.000",
    link: "/",
  },
  {
    title: "KILO",
    content: (
      <>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Domain (.com){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Halaman (5 - 7 Halaman){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Support (Support & Maintanance){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Email (7 Email){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Garansi (1 Tahun){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Design (Design standar){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} className="shrink-0" /> Basic CMS (Content Management
          System){" "}
        </p>
      </>
    ),
    price: "Rp.1000.000",
    link: "/",
  },
  {
    title: "MEGA",
    content: (
      <>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Domain (.com){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Halaman (9 - 10 Halaman){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Support (Support & Maintanance){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Email (5 Email){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Garansi (1 Tahun){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Design (Semi Custom){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} className="shrink-0" /> Basic CMS (Content Management
          System){" "}
        </p>
      </>
    ),
    price: "Rp.2000.000",
    link: "/",
  },
  {
    title: "GIGA",
    content: (
      <>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Domain (.com){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Halaman (Custom sesuai request){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Support (Support & Maintanance){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Email (15 Email){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} /> Garansi (1 Tahun){" "}
        </p>
        <p className="flex gap-2 items-center">
          <Check size={15} className="shrink-0" /> Custom CMS (Content
          Management System){" "}
        </p>
      </>
    ),

    link: "/",
  },
];

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Nama minimal 3 karakter",
  }),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .regex(/^[0-9]*$/)
    .min(9, { message: "minimal 9 angka" })
    .max(14, { message: "maksimal 14 angka" }),
  package: z.string(),
  message: z
    .string()
    .max(200, { message: "maksimal pesan hanya 200 karakter" }),
});

const PackageCard = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleOpenForm = (choosenPackage) => {
    setIsOpenForm(true);

    form.setValue("package", choosenPackage);
  };

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      phoneNumber: "",
      package: "",
    },
  });

  function handleCloseForm() {
    setIsOpenForm(false);
    form.reset();
  }

  function onSubmit(data) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="wrapper " id="targetSection">
      <h1 className="lg:text-6xl sm:text-4xl text-3xl font-bold text-center">
        Interested with our services?
      </h1>
      <h2 className="text-center text-xl sm:text-2xl lg:text-4xl mt-5 text-cyan-500 font-bold">
        Here's our Affordable Plans for Every Business.
      </h2>
      <div className="grid grid-cols-4 justify-center mt-20  gap-10">
        {cardPackage.map((value, index) =>
          index === 1 ? (
            <Card
              key={index}
              className="w-full  bg-cyan-50 border-cyan-400 dark:bg-cyan-600 shadow-lg shadow-cyan-600 flex flex-col justify-between"
            >
              <CardHeader>
                <CardTitle className="flex flex-row justify-between items-center">
                  {value.title}{" "}
                  <Badge className="text-sm text-red-400 font-bold bg-red-50 w-fit border-red-300 mt-0">
                    BEST SELLER
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="grow">{value.content}</CardContent>
              <CardFooter className="flex flex-col gap-4 justify-center font-semibold text-xl">
                <span>{value.price}</span>
                <div className="text-center mb-5">
                  <Button onClick={() => handleOpenForm(value.title)}>
                    <ShoppingBag />
                    Purchase now
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ) : (
            <Card key={index} className="w-fit flex flex-col items-center">
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">{value.content}</CardContent>
              <CardFooter className="flex  flex-col gap-4 justify-center font-semibold text-xl">
                {value.price}

                <div className="text-center mb-5">
                  <Button onClick={() => handleOpenForm(value.title)}>
                    {index == 3 ? (
                      <>
                        <Phone />
                        Contact Sales
                      </>
                    ) : (
                      <>
                        <ShoppingBag />
                        Purchase now
                      </>
                    )}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          )
        )}
      </div>
      {isOpenForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-black p-6 rounded-lg shadow-lg max-w-md w-full border-accent border border-solid">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Form Pembelian Paket</h2>
              <button
                className="text-gray-200 hover:text-gray-300"
                onClick={handleCloseForm}
              >
                ✕
              </button>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukan nama" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukan email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nomor Telepon</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukan nomor telepon" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="package"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Pilih Paket Pembelian</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="NANO" />
                            </FormControl>
                            <FormLabel className="font-normal">Nano</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="KILO" />
                            </FormControl>
                            <FormLabel className="font-normal">Kilo</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="MEGA" />
                            </FormControl>
                            <FormLabel className="font-normal">Mega</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="GIGA" />
                            </FormControl>
                            <FormLabel className="font-normal">Giga</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pesan</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Deskripsikan ide websitemu secara singkat"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full flex justify-end">
                  <Button type="submit" className="">
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageCard;
