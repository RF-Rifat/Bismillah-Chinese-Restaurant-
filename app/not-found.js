import Image from "next/image";

const ErrorPage = () => {
  return (
    <div className="h-[100svh] m-auto">
      <Image
        className="m-auto"
        src="/image/ErrorPage.png"
        height={500}
        width={500}
        alt="Error Image"
      />
    </div>
  );
};

export default ErrorPage;
