import Skills from "../data/index";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const About = () => {
  return (
    <div className="bg-[#0D0F11] py-[72px] sm:py-24 text-white">
      <div className="py-5 h-fit min-h-[500px] container">
        <div className="gap-5 md:gap-20 grid grid-cols-1 md:grid-cols-2">
          <div className="bg-slate-800 rounded-lg w-full h-full aspect-video"></div>
          <div className="px-5">
            <h1 className="mb-2 line-clamp-3 font-bold text-[40px] capitalize tracking-normal">
              Experienced Web Developer
            </h1>
            <p className="mb-5 line-clamp-4 md:line-clamp-6 font-medium text-[16px] text-slate-500 tracking-wide">
              With over 4 years of experience in web development, I have honed
              my skills in creating responsive, user-friendly, and visually
              appealing websites. I specialize in modern front-end technologies
              like React, Next.js, Redux Toolkit, and Tailwind CSS, as well as
              back-end development with Node.js and Express.
            </p>
            <ul className="my-5">
              {Skills?.map((skill) => (
                <div
                  className="flex items-center gap-x-2 my-2"
                  key={skill.title}
                >
                  <CheckBadgeIcon className="text-green-400 size-6" />
                  <li>
                    <p className="line-clamp-1 font-semibold text-[16px] text-slate-600 tracking-tight">
                      {skill.title}
                    </p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
