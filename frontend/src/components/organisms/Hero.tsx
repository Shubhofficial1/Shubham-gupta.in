import profileImage from "/assets/images/profile.webp";
import Typography from "../atoms/Typography";
import CtaButtons from "../molecules/CtaButtons";
import { StarIcon } from "@heroicons/react/24/solid";

import { useEffect, useRef } from "react";
import { annotate, annotationGroup } from "rough-notation";

const Hero = () => {
  const devTextRef = useRef(null);

  useEffect(() => {
    const color =
      Math.random() < 0.33
        ? "#ff785a"
        : Math.random() < 0.66
        ? "#0197f6"
        : "#DF73FF";

    if (devTextRef.current) {
      const devTextAnnotation = annotate(devTextRef.current, {
        type: "highlight",
        color: color,
        animationDuration: 1500,
      });
      const group = annotationGroup([devTextAnnotation]);
      group.show();
    }
  }, []);

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

        <h2 className="mt-1 font-extrabold text-[26px] text-center tracking-tight   select-none">
          <span className="text-white" ref={devTextRef}>
            Front End Developer
          </span>
          , Learner And Minimalist
        </h2>
        <Typography
          className="mt-6 max-w-2xl text-center tracking-tight"
          size="base"
          weight="semibold"
          color="slate"
        >
          A web development professional with 4+ years of experience .
          Throughout my career, i've collaborated with talented teams to take
          web applications to the next level. I specialize in building sleek,
          efficient and user centric applications that stand out. I'm currently
          looking for a new role as a developer. Hire Me !
        </Typography>
        <CtaButtons />
      </div>
    </div>
  );
};

export default Hero;
