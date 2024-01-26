import React from "react";
import { Input, Button } from "@material-tailwind/react";

export default function FoodSearch() {
  const [food, setFood] = React.useState("");
  console.log(food);

  return (
    <div className="relative flex w-full mx-auto">
      <Input
        type="search"
        label="খাবার এর নাম"
        size="lg"
        value={food}
        onChange={(e) => setFood(e.target.value)}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={food ? "gray" : "blue-gray"}
        disabled={!food}
        className="!absolute right-1 top-1 rounded"
      >
        Search
      </Button>
    </div>
  );
}
