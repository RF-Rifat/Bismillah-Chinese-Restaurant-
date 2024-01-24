"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import BannerMarquee from "@/components/marquee";

function Hero() {
  return (
    <header className="my-4 bg-white">
      <BannerMarquee />
      <div className="container mx-auto my-5 grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto lg:-mt-40">
          <Typography
            variant="h1"
            color="red"
            className="text-3xl !leading-snug"
          >
            ১০০% হালাল খাবার
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-2 max-w-sm text-3xl !leading-snug lg:mb-3 lg:text-5xl"
          >
            অপূর্ব স্বাদের সাথে স্বাগতম!
          </Typography>
          <Typography
            variant="lead"
            className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28"
          >
            স্বাদে ভরা আহার, পৌঁছে আসুন এখানে! রুচির পরিসরে আমরা নিয়ে এসেছি
            অপূর্ব স্বাদের আদর্শ স্থান, যেথা খোঁজার আনন্দ আছে একমাত্র। স্বাদের
            জন্য নির্মিত, সুস্বাদ খাবার আপনার পৌঁছাতে চলেছে এখানে, আপনির জন্য
            অদৃশ্য সুস্বাদ জগৎ। খোঁজার আনন্দে পৌঁছানোর জন্য স্বাগতম!
          </Typography>
          <Button size="lg" color="gray">
            See Menu
          </Button>
        </div>
        {/* banner carousel */}
        <div className="mt-40 grid gap-6 lg:mt-0">
          <div className="grid grid-cols-4 gap-6">
            <Image
              width={768}
              height={768}
              src="/image/books/Rectangle8.svg"
              className="rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="/image/books/Rectangle9.svg"
              className="-mt-28 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="/image/books/Rectangle10.svg"
              className="-mt-14 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="/image/books/Rectangle11.svg"
              className="-mt-20 rounded-lg shadow-md"
              alt="flowers"
            />
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div></div>
            <Image
              width={768}
              height={768}
              src="/image/books/Rectangle12.svg"
              className="-mt-28 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="/image/books/Rectangle13.svg"
              className="-mt-14 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="/image/books/Rectangle14.svg"
              className="-mt-20 rounded-lg shadow-md"
              alt="flowers"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
