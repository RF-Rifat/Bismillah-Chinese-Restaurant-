"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { EyeIcon } from "@heroicons/react/24/outline";

const MenuFoodCard = ({ cardData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-6">
      {cardData?.map((cardData) => (
        <Card key={cardData.id} className="bg-[#C1F0C1]">
          <CardHeader shadow={false} floated={false} className="h-60">
            <Image
              src={cardData?.imageSrc}
              alt="card-image"
              className="h-full w-full object-cover"
              loading="lazy"
              fill
              style={{
                objectFit: "fill",
              }}
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {cardData?.title}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                95.00
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {cardData?.description}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button color="green" className="flex items-center gap-3">
               বিস্তারিত দেখুন
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MenuFoodCard;
