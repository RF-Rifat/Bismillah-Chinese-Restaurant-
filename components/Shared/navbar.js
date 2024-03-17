"use client";
import React from "react";
import { Navbar, Collapse, Button, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export async function MainNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 260 && setOpenNav(false)
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
          <Image
            width={150}
            height={150}
            alt="logo"
            src={"/image/navLogo.png"}
          />
        </Link>
        <div className="hidden lg:block">
          {/* <NavList /> */}
          <NavTab />
        </div>
        <SignedIn>
          <UserProfile />
        </SignedIn>
        <SignedOut>
          <Link href={"/sign-in"} className="hidden gap-2 lg:flex">
            <Button size="lg" color="white" className="flex items-center gap-3">
              <Image
                src="https://docs.material-tailwind.com/icons/google.svg"
                alt="metamask"
                height={20}
                width={20}
              />
              Login
            </Button>
          </Link>
        </SignedOut>
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
        {/* <NavList /> */}
        <div className="grid md:flex my-2 justify-between">
          <NavTab />
          <SignedIn>
            <UserProfile />
          </SignedIn>
          <SignedOut>
            <div className="flex flex-nowrap items-center gap-2 lg:hidden col-span-3 md:col-span-1">
              <Button
                size="sm"
                color="white"
                className="flex items-center gap-3"
              >
                <Image
                  src="https://docs.material-tailwind.com/icons/google.svg"
                  alt="metamask"
                  height={20}
                  width={20}
                />
                Login
              </Button>
            </div>
          </SignedOut>
        </div>
      </Collapse>
    </Navbar>
  );
}
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import UserProfile from "./userProfile";
const NavTab = () => {
  const data = [
    {
      label: "হোম",
      value: "/",
      icon: Square3Stack3DIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "খাবার মেনু",
      value: "menu",
      icon: UserCircleIcon,
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "যোগাযোগ",
      value: "contact",
      icon: Cog6ToothIcon,
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  return (
    <Tabs value="/" className="bg-transparent">
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent"
        // indicatorProps={{
        //   className: "bg-gray-900/10 shadow-none !text-gray-900",
        // }}
      >
        {data.map(({ label, value, icon }) => (
          <Link href={value} key={value}>
            <Tab value={value} className="w-36">
              <div
                className="flex items-center gap-2 text-lg"
                indicatorProps={{
                  className: "text-white",
                }}
              >
                {/* {React.createElement(icon, { className: "w-5 h-5" })} */}
                {label}
              </div>
            </Tab>
          </Link>
        ))}
      </TabsHeader>
    </Tabs>
  );
};

