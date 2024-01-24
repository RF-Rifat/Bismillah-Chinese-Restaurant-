import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

const LatestFood = () => {
  return (
    <div className="font-[sans-serif] mt-6">
      <div className="container mx-auto">
        <div className="px-4 mb-10 md:text-center md:mb-20">
          <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300">
            Top Rated Food
          </h2>
          <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
            <div className="flex-1 h-2 bg-orange-200"></div>
            <div className="flex-1 h-2 bg-orange-400"></div>
            <div className="flex-1 h-2 bg-orange-300"></div>
          </div>{" "}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <Image
                src="/image/banner1.jpg"
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
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LatestFood;
