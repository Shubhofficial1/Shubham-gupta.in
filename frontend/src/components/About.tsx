import Skills from "../data/index";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const About = () => {
  return (
    <div className="bg-[#0D0F11] text-white py-[72px] sm:py-24">
      <div className="container h-[500px]">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <div className=" w-full h-full rounded-lg bg-slate-800 "></div>
          <div className="px-5 ">
            <p className="w-fit border border-indigo-500 px-2 py-1 font-semibold text-[14px] rounded-br-lg">
              About Me
            </p>
            <h1 className="font-bold text-[40px] tracking-normal mt-3 mb-2 line-clamp-3 capitalize">
              Experienced Web Developer
            </h1>
            <p className="font-medium text-[16px] tracking-wide mb-5 line-clamp-6 text-slate-500">
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
                  <CheckBadgeIcon className="size-6 text-green-400" />
                  <li>
                    <p className="font-semibold text-[16px] tracking-tight line-clamp-1 text-slate-600">
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
