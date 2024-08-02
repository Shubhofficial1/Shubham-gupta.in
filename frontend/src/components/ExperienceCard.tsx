import { CheckCircleIcon, BoltIcon } from "@heroicons/react/24/solid";
import Typography from "./atoms/Typography";

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
        <Typography weight="medium" size="xs" color="slate">
          {experience.completionDate}
        </Typography>

        <Typography weight="medium" size="xs" color="slate">
          {experience.joiningDate}
        </Typography>

        <Typography
          className="tracking-wide"
          weight="normal"
          size="xs"
          color="slate"
        >
          ({experience.duration})
        </Typography>
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
        <Typography
          className="line-clamp-1 font-bold text-[16px] text-slate-100"
          weight="bold"
          size="sm"
        >
          {experience.position}
        </Typography>

        <Typography
          className="my-1 line-clamp-1"
          weight="light"
          size="xs"
          color="slate"
        >
          {experience.company}
        </Typography>
      </div>
    </div>
  );
};

export default ExperienceCard;
