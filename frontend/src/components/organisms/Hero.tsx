import profileImage from "/assets/images/profile.webp";
import Typography from "../atoms/Typography";
import CtaButtons from "../molecules/CtaButtons";
import { StarIcon } from "@heroicons/react/24/solid";

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

        <h1 className="mt-5 font-bold text-[46px] text-center tracking-wide select-none">
          Hi 👋, I'm{" "}
          <span className="bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-400 text-transparent [-webkit-background-clip:text]">
            Shubham
          </span>
        </h1>

        <h2 className="mt-1 font-extrabold text-[26px] text-center tracking-tight bg-gradient-to-r from-[#818cf8] to-[#c7d2fe] bg-clip-text text-transparent  select-none underline underline-offset-8 stroke-2  decoration-[#c7d2fe]">
          Front End Developer, Learner And Minimalist
        </h2>

        <Typography
          className="mt-6 max-w-2xl text-center tracking-tight"
          size="base"
          weight="semibold"
          color="slate"
        >
          A web development professional with 4 years of experience in the
          field. Over the years, I've collaborated with talented developers who
          have continuously raised the bar for what a web application should be.
          I'm passionate about creating sleek, efficient, and user-friendly
          applications that stand out.
        </Typography>

        <CtaButtons />
      </div>
    </div>
  );
};

export default Hero;
