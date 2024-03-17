import { useEffect, useState } from "react";
import FoodCard from "../Shared/FoodCard";
import FoodCardTitle from "../Shared/FoodCardTitle";

const LatestFood = () => {
  const [foodData, setFoodData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("http://localhost:3000/api/food");

        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        setFoodData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading food data...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  console.log(foodData);
  const cardData = [
    {
      id: 1,
      imageSrc: "/image/food1.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
    },
    {
      id: 2,
      imageSrc: "/image/food1.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
    },
    {
      id: 3,
      imageSrc: "/image/food1.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
    },
    {
      id: 4,
      imageSrc: "/image/food1.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
    },
  ];
  const cardData2 = [
    {
      id: 1,
      imageSrc: "/image/food2.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
    },
    {
      id: 2,
      imageSrc: "/image/food2.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
    },
    {
      id: 3,
      imageSrc: "/image/food2.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
    },
    {
      id: 4,
      imageSrc: "/image/food3.jpg",
      title: "বিসমিল্লাহ্ চাইনিজ, সেট মেনু প্লাটার",
      description:
        "বিগ মাটন, ফ্রাইড রাইস, সালাদ এবং চানিজ ভেজিটেবল মূল্য: 450.00",
    },
  ];

  return (
    <div className="font-[sans-serif] mt-6">
      {/* সেরা খাবার তালিকা */}
      <div className="mx-auto mb-16">
        <FoodCardTitle title="সেরা খাবার তালিকা" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData?.map((cardInfo) => (
            <FoodCard key={cardInfo?.id} cardInfo={cardInfo} />
          ))}
        </div>
      </div>
      {/* নতুন খাবার তালিকা */}
      <div className="mx-auto">
        <FoodCardTitle title="নতুন খাবার তালিকা" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData2?.map((cardInfo) => (
            <FoodCard key={cardInfo?.id} cardInfo={cardInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestFood;
