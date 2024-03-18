import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
export const NavTab = () => {
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
        // className="rounded-none border-b border-blue-gray-50 bg-transparent"
        // indicatorProps={{
        //   className: "bg-gray-900/10 shadow-none !text-gray-900",
        // }}
        className="border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "border-b-2 border-gray-900 shadow-none !text-gray-900 rounded-md bg-gray-900/10",
        }}
      >
        {data.map(({ label, value, icon }) => (
          <Link href={value} key={value}>
            <Tab value={value} className="w-36">
              <div
                className="grid items-center gap-2 text-lg"
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
