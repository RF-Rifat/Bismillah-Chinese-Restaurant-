"use client";
import { useEffect, useState } from "react";
import { Navbar, Collapse, Button, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { NavTab } from "./navTab";
import UserProfile from "./userProfile";

export function MainNavbar() {
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
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

        <div className="hidden lg:block">
          <SignedIn>
            <UserProfile />
          </SignedIn>
        </div>
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
        <div className="grid md:flex mt-5 justify-between">
          <NavTab />
          <SignedIn>
            <UserProfile />
          </SignedIn>
          <SignedOut>
            <div className="flex flex-nowrap items-center gap-2 lg:hidden col-span-3 md:col-span-1">
              <Link href={"/sign-in"}>
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
              </Link>
            </div>
          </SignedOut>
        </div>
      </Collapse>
    </Navbar>
  );
}
