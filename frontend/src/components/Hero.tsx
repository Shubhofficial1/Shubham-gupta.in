import Button from "./ui/Button";
import profileImage from "../assets/images/profile.webp";
import {
  StarIcon,
  EnvelopeIcon,
  FolderArrowDownIcon,
} from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <div className=" bg-[#0D0F11] text-white py-[72px]  sm:py-24">
      <div className="container flex flex-col items-center">
        <div className="relative">
          <StarIcon className="size-7 bg-white text-yellow-400 rounded-full absolute bottom-9 -right-[2px] p-1 cursor-pointer" />
          <img
            src={profileImage}
            alt="Shubham Gupta"
            className="w-[180px] h-[180px] rounded-full border-4 border-white object-cover"
          />
        </div>

        <h1 className="font-bold text-[46px] tracking-wide mt-5 text-center">
          Hi 👋, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-indigo-400 text-transparent bg-clip-text [-webkit-background-clip:text]">
            Shubham
          </span>
        </h1>

        <h3 className="font-extrabold text-[28px] text-center tracking-tight text-indigo-500 underline underline-offset-8 my-1">
          Front End Developer, Learner And Minimalist
        </h3>

        <p className="font-medium text-[18px] tracking-tight text-center max-w-2xl mt-6 line-clamp-4 md:line-clamp-none ">
          I'm a 24-year-old student at Uttar Pradesh Technical University,
          currently studying web development and design. As I've grown as a
          developer, I've worked alongside senior designers and developers who
          have raised my standards for what is expected of any web application.
        </p>

        <div className="flex flex-col items-center justify-center my-6 gap-y-4 md:flex-row md:my-8  md:gap-y-0 sm:gap-x-4  ">
          <Button onClick={() => {}}>
            <h1 className="text-white text-lg font-bold tracking-tight">
              Contact Me
            </h1>
            <EnvelopeIcon className="size-6" />
          </Button>

          <Button bgColor="bg-indigo-500" onClick={() => {}}>
            <h1 className="text-white text-lg font-bold tracking-tight">
              Download CV
            </h1>
            <FolderArrowDownIcon className="size-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
