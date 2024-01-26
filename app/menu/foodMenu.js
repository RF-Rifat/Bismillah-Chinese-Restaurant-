"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import FoodSearch from "./foodSearch";
import FoodCard from "@/components/Shared/FoodCard";
import LatestFood from "@/components/home/latestFood";
import MenuFoodCard from "./menuFoodCard";

export function FoodMenu() {
    const cardData = [
      {
        id: 1,
        imageSrc: "/image/food2.jpg",
        title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
        description:
          "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
      },
      {
        id: 2,
        imageSrc: "/image/food2.jpg",
        title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
        description:
          "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
      },
      {
        id: 3,
        imageSrc: "/image/food2.jpg",
        title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
        description:
          "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
      },
      {
        id: 4,
        imageSrc: "/image/food3.jpg",
        title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
        description:
          "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
      },
    ];

  const data = [
    {
      label: "সব খাবার তালিকা",
      value: "all",
      desc: <LatestFood />,
    },
    {
      label: "সেট মেনু প্লাটার",
      value: "সেট মেনু প্লাটার",
      desc: <MenuFoodCard cardData={cardData} /> ,
    },
    {
      label: "চাইনিজ খাবার",
      value: "চাইনিজ খাবার",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "ফাস্ট ফুড",
      value: "ফাস্ট ফুড",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "বিসমিল্লাহ্ চাইনিজ",
      value: "বিসমিল্লাহ্ চাইনিজ",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "ইফতার",
      value: "ইফতার",
      desc: <LatestFood />,
    },
  ];

  return (
    <>
      <div className="flex gap-4 my-10">
        <h2 className="inline-block">আপনার পছন্দের খাবার খুঁজুন</h2>
        <FoodSearch />
      </div>
      <Tabs value="all" orientation="vertical" color="green">
        <TabsHeader className="">
          {data.map(({ label, value }) => (
            <Tab className="p-4" key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="py-0">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>{" "}
    </>
  );
}
