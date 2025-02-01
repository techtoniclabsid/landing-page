import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";

import Link from "next/link";

const cardPackage = [
  {
    title: "NANO",
    description: "Cocok untuk membuat website landing page dan portofolio.",
    descriptionPlus: "Fitur yang didapat :",
    content: (
      <ul className="grid gap-2 mt-2">
        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Hosting</span>
        </li>
        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Domain (.com)</span>
        </li>
        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>{" "}
          <span>SSL / HTTPS</span>
        </li>

        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>{" "}
          <span>Halaman (1 Halaman)</span>
        </li>
        <li className="flex space-x-2 text-lg items-start">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400 mt-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>
            Support & Maintenance <br /> (1 Tahun)
          </span>
        </li>
        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>{" "}
          <span>Fitur chat WhatsApp</span>
        </li>
        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span> Email (1 Email)</span>
        </li>

        <li className="flex space-x-2 text-lg items-start">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400 mt-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Design Responsive (Design simple)</span>
        </li>
        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>SEO Optimization</span>
        </li>
      </ul>
    ),
    price: "Rp500.000",
    link: "/",
  },
  {
    title: "KILO",
    description:
      "Cocok untuk website Company Profile Bisnis / UMKM / Web Personal",
    descriptionPlus: "Semua yang ada dipaket NANO, ditambah:",
    content: (
      <ul className="grid gap-2 mt-2">
        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Halaman (2 - 7 Halaman)</span>
        </li>

        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span> Email (2 Email)</span>
        </li>
        <li className="flex space-x-2 text-lg items-start">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400 mt-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Design Responsive (Design standar)</span>
        </li>
        <li className="flex space-x-2 text-lg items-start">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400 mt-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Basic CMS (Content Management System)</span>
        </li>
      </ul>
    ),
    price: "Rp1.000.000",
    link: "/",
  },
  {
    title: "MEGA",
    description:
      "Cocok untuk Website Perusahaan Menengah, Lembaga, Instansi, Sekolah, dan marketplace. ",
    descriptionPlus: "Semua yang ada dipaket KILO, ditambah:",
    content: (
      <ul className="grid gap-2 mt-2">
        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Domain semi custom</span>
        </li>
        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Halaman (8 - 10 Halaman)</span>
        </li>

        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Email (4 Email)</span>
        </li>
        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Design (Semi Custom)</span>
        </li>
        <li className="flex space-x-2 text-lg items-start">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400 mt-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Marketplace</span>
        </li>
        <li className="flex space-x-2 text-lg items-start">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400 mt-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Basic CMS (Content Management System)</span>
        </li>
      </ul>
    ),
    price: "Rp2.000.000",
    link: "/",
  },
  {
    title: "GIGA",
    description: "Cocok untuk membuat website Enterprise",
    descriptionPlus: "Semua yang ada dipaket MEGA ditambah:",

    content: (
      <ul className="grid gap-2 mt-2">
        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Custom Domain</span>
        </li>
        <li className="flex space-x-2 text-lg items-start">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400 mt-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Halaman (Custom sesuai request)</span>
        </li>
        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Custom Email</span>
        </li>
        <li className="flex space-x-2 text-lg items-center">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Custom Design</span>
        </li>
        <li className="flex space-x-2 text-lg items-start">
          <svg
            class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400 mt-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Custom CMS (Content Management System)</span>
        </li>
      </ul>
    ),
    price: "Custom",
    link: "/",
  },
];

const PackageCard = () => {
  return (
    <div className="wrapper pt-36" id="targetSection">
      <h1 className="lg:text-6xl sm:text-4xl text-3xl font-bold text-center">
        Tertarik dengan servis kami?
      </h1>
      <h2 className="text-center text-xl sm:text-2xl lg:text-4xl mt-5 text-cyan-500 font-bold">
        Berikut adalah paket terjangkau kami untuk setiap bisnis.
      </h2>
      <div className="grid grid-rows-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  justify-center mt-20  gap-10">
        {cardPackage.map((value, index) => (
          <Card
            key={index}
            className={
              index === 1
                ? "w-full h-full flex flex-col space-y-8 bg-gradient-to-tr from-950 via-cyan-600 to-cyan-400"
                : "w-full h-full flex flex-col space-y-8"
            }
          >
            {/* Header */}
            <CardHeader>
              <div className="h-20">
                <CardTitle className="text-xl text-left">
                  {value.title}
                </CardTitle>
                <CardDescription className="text-md text-left text-gray-300">
                  {value.description}
                </CardDescription>
              </div>
            </CardHeader>

            {/* Price Section */}
            <CardTitle className="text-4xl text-center font-bold h-fit px-6">
              {value.price}
            </CardTitle>

            {/* Content */}
            <CardContent className="flex-grow text-left">
              <CardDescription className="text-md text-left text-gray-300">
                {value.descriptionPlus}
              </CardDescription>
              {value.content}
            </CardContent>

            {/* Footer */}
            <CardFooter className="flex justify-center font-semibold text-xl">
              <div className="text-center">
                <Button className="bg-cyan-500 text-white hover:bg-cyan-400">
                  <Link href={value.link}>
                    {index === 3 ? (
                      <div className="flex items-center gap-4 text-xl">
                        <Phone />
                        Hubungi Sales
                      </div>
                    ) : (
                      <div className="flex items-center gap-4 text-xl">
                        Beli Sekarang
                      </div>
                    )}
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PackageCard;
