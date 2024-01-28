"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row gap-2 lg:p-1">
      <Link
        href={"/"}
        className={`font-bold py-2 px-4  
           ${
             usePathname() === "/"
               ? "active  bg-blue-500 hover:bg-blue-700 text-white border-blue-700 rounded"
               : ""
           }`}
      >
        হোম
      </Link>

      <Link
        href={"/event"}
        className={`font-bold py-2 px-4   
           ${
             usePathname() === "/event"
               ? "active   bg-blue-500 hover:bg-blue-700 text-white border-blue-700 rounded"
               : ""
           }`}
      >
        অনুষ্ঠান
      </Link>
      <Link
        href={"/menu"}
        className={`font-bold py-2 px-4   
           ${
             usePathname() === "/menu"
               ? "active   bg-blue-500 hover:bg-blue-700 text-white border-blue-700 rounded"
               : ""
           }`}
      >
        খাবার মেনু
      </Link>
      <Link
        href={"/contact"}
        className={`font-bold py-2 px-4   
           ${
             usePathname() === "/contact"
               ? "active   bg-blue-500 hover:bg-blue-700 text-white border-blue-700 rounded"
               : ""
           }`}
      >
        যোগাযোগ
      </Link>
    </List>
  );
}

export function MainNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar
      shadow={false}
      fullWidth
      className="mx-auto max-w-screen-2xl px-4 py-2 border-0 sticky top-0 z-50 bg-[#EAF7E3]"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href={"/"}>
          <Image width={60} height={60} alt="logo" src={"/image/food.gif"} />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button size="lg" color="white" className="flex items-center gap-3">
            <Image
              src="https://docs.material-tailwind.com/icons/google.svg"
              alt="metamask"
              height={20}
              width={20}
            />
            Login
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button size="lg" className="flex items-center gap-3">
            <Image
              src="https://docs.material-tailwind.com/icons/google.svg"
              alt="metamask"
              height={20}
              width={20}
            />
            Login
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
