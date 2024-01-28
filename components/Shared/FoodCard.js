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

const FoodCard = ({ cardInfo }) => {
  const { imageSrc, title, description } = cardInfo || {};
  return (
    <Card className="mt-6 bg-[#C1F0C1]">
      <CardHeader color="blue-gray" className="relative h-60 lg:h-80">
        <Image
          src={imageSrc}
          alt="সেরা খাবার"
          quality={10}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href="/menu">
          <Button color="green">অর্ডার করুন</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;
