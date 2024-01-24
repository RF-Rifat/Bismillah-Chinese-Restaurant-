import Image from "next/image";
import Marquee from "react-fast-marquee";

const BannerMarquee = () => {
  return (
    <div className="h-44 max-w-screen-2xl mx-auto">
      <div className="px-4 md:text-center">
        <h2 className="pb-2 text-2xl font-semibold text-gray-800 md:text-4xl dark:text-gray-300">
          Our Partner
        </h2>
        <div className="flex w-32 mt-1 overflow-hidden rounded md:mx-auto md:mb-14">
          <div className="flex-1 h-2 bg-teal-200"></div>
          <div className="flex-1 h-2 bg-teal-400"></div>
          <div className="flex-1 h-2 bg-teal-300"></div>
        </div>
      </div>
      <div>
        <Marquee className="mt-5" autoFill={true} pauseOnHover={true}>
          <Image className="h-48 px-5 " src="https://ibb.co/py7mMHq" alt="" />
          <Image className="h-36 px-5" src="https://ibb.co/py7mMHq" alt="" />
          <Image className="h-36 px-5" src="https://ibb.co/py7mMHq" alt="" />
          <Image className="h-[100px] px-5" src="https://ibb.co/py7mMHq" alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default BannerMarquee;
