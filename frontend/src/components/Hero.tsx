import Button from "./ui/Button";
import profileImage from "../assets/images/profile.webp";
import {
  StarIcon,
  EnvelopeIcon,
  FolderArrowDownIcon,
} from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <div className="bg-[#0D0F11] pt-20 pb-32 text-white">
      <div className="flex flex-col items-center container">
        <div className="relative">
          <StarIcon className="-right-[2px] bottom-9 absolute bg-white p-1 rounded-full text-yellow-400 cursor-pointer size-7" />
          <img
            src={profileImage}
            alt="Shubham Gupta"
            className="border-4 border-white rounded-full w-[180px] h-[180px] object-cover"
          />
        </div>

        <h1 className="mt-5 font-bold text-[46px] text-center tracking-wide">
          Hi 👋, I'm{" "}
          <span className="bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-400 text-transparent [-webkit-background-clip:text]">
            Shubham
          </span>
        </h1>

        <h3 className="my-1 font-extrabold text-[28px] text-center text-indigo-500 underline underline-offset-8 tracking-tight">
          Front End Developer, Learner And Minimalist
        </h3>

        <p className="mt-6 line-clamp-4 md:line-clamp-none max-w-2xl font-medium text-[18px] text-center tracking-tight">
          I'm a 24-year-old student at Uttar Pradesh Technical University,
          currently studying web development and design. As I've grown as a
          developer, I've worked alongside senior designers and developers who
          have raised my standards for what is expected of any web application.
        </p>

        <div className="flex md:flex-row flex-col justify-center items-center gap-y-4 sm:gap-x-4 md:gap-y-0 my-6 md:my-8">
          <Button onClick={() => {}}>
            <h1 className="font-bold text-lg text-white tracking-tight">
              Contact Me
            </h1>
            <EnvelopeIcon className="size-6" />
          </Button>

          <Button bgColor="bg-indigo-500" onClick={() => {}}>
            <h1 className="font-bold text-lg text-white tracking-tight">
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
