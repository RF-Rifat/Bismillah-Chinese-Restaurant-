import Image from "next/image";
import { FaFacebook, FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";

import { Dancing_Script } from "next/font/google";
import Link from "next/link";
const cursive = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 pb-10 pt-20 dark:bg-dark lg:pb-10 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-evenly items-center">
            <div className="px-4">
              <div className="mb-10 w-full mx-auto">
                <Link href="/" className="mb-6 inline-block max-w-[160px]">
                  <Image
                    src="/image/logo.png"
                    alt="logo"
                    height={100}
                    width={100}
                    className="dark:hidden w-full mx-auto"
                  />
                </Link>
                <p
                  className={`mb-7 text-body-color dark:text-dark-6 text-xl ${cursive.className}`}
                >
                  Beautiful Service is Our Dream
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-3">খোলার সময়</h2>
              <ul>
                <li>প্রতিদিন :</li>
                <li className="mb-2">সকাল ১১:০০ টা হইতে রাত ১০ টা</li>
                <li>শুক্রবার :</li>
                <li>বিকাল ০৩:৩০ টা হইতে রাত ১০:০০ টা</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-3">দ্রুত লিঙ্ক</h2>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/people/%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A6%AE%E0%A6%BF%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%B9%E0%A7%8D-%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A6%BF%E0%A6%9C-%E0%A6%B0%E0%A7%87%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%81%E0%A6%B0%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F-Beautiful-Service-is-Our-Dream/100083517151611"
                    class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Bismillah-Chinese
                    <svg
                      class="w-4 h-4 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:mailto:info@bismillahchinese.com"
                    class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Email
                    <svg
                      class="w-4 h-4 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="px-4">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-dark dark:text-white">
                  For More Info Visit Here
                </h4>
                <div className="flex gap-2">
                  <a href="https://www.facebook.com/people/%E0%A6%AC%E0%A6%BF%E0%A6%B8%E0%A6%AE%E0%A6%BF%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A6%BE%E0%A6%B9%E0%A7%8D-%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A6%BF%E0%A6%9C-%E0%A6%B0%E0%A7%87%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%81%E0%A6%B0%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F-Beautiful-Service-is-Our-Dream/100083517151611/">
                    <FaFacebook className="h-10 w-10" />
                  </a>
                  <a href="abc">
                    <FaWhatsapp className="h-10 w-10" />
                  </a>
                  <a href="mailto:info@bismillahchinese.com">
                    <IoMailOpenOutline className="h-10 w-10" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
        <hr class="my-2 border-gray-200 sm:mx-auto dark:border-black lg:my-4" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Bismillah-Chinese
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
};

export default Footer;
