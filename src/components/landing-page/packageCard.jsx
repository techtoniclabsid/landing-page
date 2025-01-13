import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Check, Phone, ShoppingBag } from "lucide-react";
import { Badge } from "../ui/badge";

const PackageCard = () => {
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
        </>
      ),

      link: "/",
    },
  ];

  return (
    <div className="wrapper ">
      <h1 className="lg:text-6xl sm:text-4xl text-3xl font-bold text-center">
        Interested with our services?
      </h1>
      <h2 className="text-center text-xl sm:text-2xl lg:text-4xl mt-5 text-cyan-500 font-bold">
        Here's our Affordable Plans for Every Business.
      </h2>
      <div className="flex gap-10 justify-center mt-20 flex-col sm:flex-row">
        {cardPackage.map((value, index) =>
          index === 1 ? (
            <Card key={index} className="w-fit bg-cyan-50 border-cyan-300">
              <CardHeader>
                <CardTitle className="flex flex-row justify-between items-center">
                  {value.title}{" "}
                  <Badge className="text-sm text-red-400 font-bold bg-red-50 w-fit border-red-300 mt-0">
                    BEST SELLER
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>{value.content}</CardContent>
              <CardFooter className="flex justify-center font-semibold text-xl">
                {value.price}
              </CardFooter>
              <div className="text-center mb-5">
                <Button>
                  <ShoppingBag />
                  <Link href={value.link}>Purchase now</Link>
                </Button>
              </div>
            </Card>
          ) : (
            <Card key={index} className="w-fit">
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>{value.content}</CardContent>
              <CardFooter className="flex justify-center font-semibold text-xl">
                {value.price}
              </CardFooter>
              <div className="text-center mb-5">
                <Button>
                  {index == 3 ? (
                    <>
                      <Phone />
                      <Link href={value.link}>Contact Sales</Link>
                    </>
                  ) : (
                    <>
                      <ShoppingBag />
                      <Link href={value.link}>Purchase now</Link>
                    </>
                  )}
                </Button>
              </div>
            </Card>
          )
        )}
      </div>
    </div>
  );
};

export default PackageCard;
