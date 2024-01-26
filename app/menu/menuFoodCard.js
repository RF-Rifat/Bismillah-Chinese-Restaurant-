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
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-6">
      {cardData?.map((cardData) => (
        <Card key={cardData.id}>
          <CardHeader shadow={false} floated={false} className="h-60">
            <Image
              src={cardData?.imageSrc}
              alt="card-image"
              className="h-full w-full object-cover"
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              style={{
                objectFit: "contain",
              }}
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {cardData?.title}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                $95.00
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
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MenuFoodCard;
