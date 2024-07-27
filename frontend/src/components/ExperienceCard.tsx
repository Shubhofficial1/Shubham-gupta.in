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

interface ExperienceCardProps {
  experience: IExperience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="flex items-center gap-x-5 border-[1px] border-slate-700 border-x-[1px] md:border-x-0 mb-2 md:mb-0 rounded-md md:rounded-none h-[100px]">
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
            <BoltIcon className="bottom-[calc(50%-12px)] -left-[calc(50%+12px)] absolute fill-yellow-200 size-6" />
          ) : (
            <CheckCircleIcon className="bottom-[calc(50%-12px)] -left-[calc(50%+12px)] absolute fill-blue-400 size-6" />
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
  );
};

export default ExperienceCard;
