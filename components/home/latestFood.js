import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

const LatestFood = () => {
  return (
    <div className="font-[sans-serif] mt-6">
      <div className="container mx-auto">
        <div className="px-4 mb-10 md:text-center md:mb-20">
          <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
            সেরা খাবার তালিকা
          </h2>
          <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-6">
            <div className="flex-1 h-2 bg-orange-200"></div>
            <div className="flex-1 h-2 bg-orange-400"></div>
            <div className="flex-1 h-2 bg-orange-300"></div>
          </div>{" "}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="mt-6 bg-[#C1F0C1]">
            <CardHeader color="blue-gray" className="relative h-56">
              <Image
                src="/image/food1.jpg"
                alt="latest Food"
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার
              </Typography>
              <Typography>
                বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link href={"/menu"}>
                <Button>অর্ডার করুন</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="mt-6 bg-[#C1F0C1]">
            <CardHeader color="blue-gray" className="relative h-56">
              <Image
                src="/image/food1.jpg"
                alt="latest Food"
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার
              </Typography>
              <Typography>
                বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link href={"/menu"}>
                <Button>অর্ডার করুন</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="mt-6 bg-[#C1F0C1]">
            <CardHeader color="blue-gray" className="relative h-56">
              <Image
                src="/image/food1.jpg"
                alt="latest Food"
                fill
                sizes="(min-width: 408px) 50vw, 100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার
              </Typography>
              <Typography>
                বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link href={"/menu"}>
                <Button>অর্ডার করুন</Button>
              </Link>
            </CardFooter>
          </Card>
          <Card className="mt-6 bg-[#C1F0C1]">
            <CardHeader color="blue-gray" className="relative h-56">
              <Image
                src="/image/food1.jpg"
                alt="latest Food"
                fill
                sizes="(min-width: 808px) 50vw, 100vw"
                style={{
                  objectFit: "cover",
                }}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার
              </Typography>
              <Typography>
                বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link href={"/menu"}>
                <Button>অর্ডার করুন</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LatestFood;
