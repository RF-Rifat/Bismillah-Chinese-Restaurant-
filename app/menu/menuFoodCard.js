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
              quality={10}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MenuFoodCard;
