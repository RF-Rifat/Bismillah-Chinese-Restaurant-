"use client";

import LatestFood from "@/components/home/latestFood";
import BannerMarquee from "@/components/home/marquee";
import BannerSwiper from "@/components/home/swiper";

function Hero() {
  return (
    <>
      <BannerMarquee />
      <BannerSwiper />
      <LatestFood />
    </>
  );
}
export default Hero;
