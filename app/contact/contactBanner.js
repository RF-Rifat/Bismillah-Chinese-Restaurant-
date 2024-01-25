import Image from "next/image";

const ContactBanner = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[80svh]">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: 'url("/image/banner1.jpg")',
          backgroundAttachment: "fixed",
        }}
      >
        <span className="w-full h-full absolute opacity-50 bg-black" />
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="font-semibold text-5xl text-green-500">
                যোগাযোগ করুন - বিসমিল্লাহ্ চাইনীজ
              </h1>
              <p className="text-lg text-gray-400 mt-2">
                আমাদের সাথে যোগাযোগ করতে এখানে ক্লিক করুন অথবা নিচের ঠিকানায়
                যোগাযোগ করুন:
              </p>
              <a href="#contact" className="w-full flex justify-center">
                <Image
                  height={100}
                  width={100}
                  src="/image/arrow.gif"
                  alt="arrow"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
        style={{ transform: "translateZ(0px)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x={0}
          y={0}
        >
          <polygon
            className="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
    </div>
  );
};

export default ContactBanner;
