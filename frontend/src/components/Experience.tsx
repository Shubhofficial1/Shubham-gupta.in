import { experiences } from "../data";
import { CheckCircleIcon, BoltIcon } from "@heroicons/react/24/solid";

interface IExperience {
  _id: number;
  joiningDate: string;
  completionDate: string;
  duration: string;
  position: string;
  company: string;
  companyShortName: string;
}

const Experience = () => {
  return (
    <div className="bg-[#0D0F11] pt-20 pb-32 text-white">
      <div className="container">
        <h1 className="mb-2 line-clamp-3 font-bold text-[40px] capitalize tracking-normal">
          My Professional Journey
        </h1>
        <p className="mb-5 line-clamp-5 md:line-clamp-3 max-w-4xl font-medium text-[16px] text-slate-500 tracking-wide">
          Throughout my career, I've had the privilege of contributing to and
          learning from some of the best in the industry. Each position has
          enriched my skills, broadened my perspective, and reinforced my
          commitment to excellence. Take a look at the roles I've excelled in
          and the impact I've made along the way.
        </p>
        <div className="flex flex-col bg-gradient-to-t from-[#151a21]/[.5] to-[#151a21]/[1] my-16 px-5 md:px-10 py-5 rounded-lg max-w-4xl">
          <h1 className="mb-5 font-bold text-[18px] text-white capitalize tracking-normal">
            Career Journey
          </h1>
          {experiences.map((experience: IExperience) => (
            <div
              key={experience._id}
              className="flex items-center gap-x-5 border-[1px] border-slate-700 border-x-[1px] md:border-x-0 mb-2 md:mb-0 rounded-md md:rounded-none h-[100px]"
            >
              <div className="md:flex flex-col justify-center items-end hidden px-5 min-w-[180px] h-full">
                <h1 className="font-medium text-[14px] text-slate-400 capitalize tracking-normal">
                  {experience.completionDate}
                </h1>
                <p className="font-medium text-[14px] text-slate-400 capitalize tracking-wide">
                  {experience.joiningDate}
                </p>
                <p className="font-normal text-[14px] text-slate-500 capitalize tracking-wide">
                  ({experience.duration})
                </p>
              </div>
              <div className="md:inline relative border-[1px] border-slate-700 hidden h-full">
                <span>
                  {experience.completionDate === "Present" ? (
                    <BoltIcon className="bottom-[calc(50%-12px)] -left-3 absolute fill-yellow-200 size-6" />
                  ) : (
                    <CheckCircleIcon className="bottom-[calc(50%-12px)] -left-3 absolute fill-blue-400 size-6" />
                  )}
                </span>
              </div>
              <div className="flex flex-col justify-center items-start px-5 h-full">
                <h1 className="line-clamp-1 font-bold text-[16px] text-slate-100 capitalize tracking-normal">
                  {experience.position}
                </h1>
                <p className="my-1 line-clamp-1 font-light text-[14px] text-slate-400 capitalize tracking-wide">
                  {experience.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
