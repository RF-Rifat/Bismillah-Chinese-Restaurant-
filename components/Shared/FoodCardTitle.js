const FoodCardTitle = ({title}) => {
  return (
    <>
      <div className="px-4 mb-10 text-center md:mb-16">
        <h2 className="pb-2 text-2xl font-bold text-center text-gray-800 md:text-4xl dark:text-gray-300">
          {title}
        </h2>
        <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded mx-auto md:mb-6">
          <div className="flex-1 h-2 bg-orange-200"></div>
          <div className="flex-1 h-2 bg-orange-400"></div>
          <div className="flex-1 h-2 bg-orange-300"></div>
        </div>{" "}
      </div>
    </>
  );
}

export default FoodCardTitle