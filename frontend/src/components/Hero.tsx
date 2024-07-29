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

        <h2 className="my-1 font-extrabold text-[28px] text-center text-indigo-500 underline underline-offset-8 tracking-tight">
          Front End Developer, Learner And Minimalist
        </h2>

        <p className="mt-6 line-clamp-4 md:line-clamp-none max-w-2xl font-semibold text-[18px] text-center tracking-tight">
          A web development professional with 4 years of experience in the
          field. Over the years, I've collaborated with talented developers who
          have continuously raised the bar for what a web application should be.
          I'm passionate about creating sleek, efficient, and user-friendly
          applications that stand out.
        </p>

        <div className="flex md:flex-row flex-col justify-center items-center gap-y-4 sm:gap-x-4 md:gap-y-0 my-6 md:my-8">
          <a
            className={`px-5 py-3 min-w-[200px] bg-slate-800  rounded-lg cursor-pointer transition hover:scale-105 flex items-center justify-center gap-3`}
            href="mailto:[shubhofficial1@gmail.com]?subject=Let's Collaborate!&body=Hi Shubham,%0D%0A%0D%0AI came across your portfolio and I'm impressed by your work. I'd love to discuss potential collaboration opportunities with you.%0D%0A%0D%0AThanks,%0D%0A[Your Name]"
          >
            <h1 className="font-bold text-lg text-white tracking-tight">
              Contact Me
            </h1>
            <EnvelopeIcon className="size-6" />
          </a>

          <a
            className={`px-5 py-3 min-w-[200px] bg-indigo-500  rounded-lg cursor-pointer transition hover:scale-105 flex items-center justify-center gap-3`}
            href="/Resume.pdf"
            download={"SHUBHAM KUMAR"}
          >
            <h1 className="font-bold text-lg text-white tracking-tight">
              Download CV
            </h1>
            <FolderArrowDownIcon className="size-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
