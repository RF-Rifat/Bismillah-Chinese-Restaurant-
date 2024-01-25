import Image from "next/image";
import Marquee from "react-fast-marquee";

const BannerMarquee = () => {
  return (
    <div className="h-14 lg:mb-14 mx-auto text-black p-2">
      <div>
        <Marquee autoFill={true} pauseOnHover={true}>
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold">
            আমাদের মেনুতে আপনি সব ধরণের সুস্বাদু এবং আকর্ষণীয় খাবার পাবেন সঠীক
            দামে। আপনি ঘরে বসে ফুড অর্ডার করুন আপনার পছন্দের রেস্টুরেন্ট থেকে।
          </h2>
        </Marquee>
      </div>
    </div>
  );
};

export default BannerMarquee;
