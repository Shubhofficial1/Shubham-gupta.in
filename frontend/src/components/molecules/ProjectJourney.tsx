import Typography from "../atoms/Typography";
import {
  LightBulbIcon,
  BookOpenIcon,
  FireIcon,
} from "@heroicons/react/24/outline";

interface ISections {
  title: string;
  steps: string[];
}

interface IProjectJourneyProps {
  sections: ISections[];
}

const ProjectJourney: React.FC<IProjectJourneyProps> = ({ sections }) => {
  return (
    <div className="flex flex-col max-w-3xl my-36 ">
      {sections.map((section) => (
        <div className="mb-20 " key={section.title}>
          <Typography className="my-5 line-clamp-2" weight="bold" size="md">
            {section.title}
          </Typography>

          <div className="border-l-2 border-indigo-200 bg-[#1B1F29] p-5 rounded-md  my-10 relative">
            {section.title === "Web Stack and Explanation 🔥" && (
              <FireIcon className="hidden lg:block absolute -top-7 -left-7 size-14 text-orange-300  bg-[#0D0F11]  rounded-full p-2 " />
            )}
            {section.title === "Problems and Thought Process 👨‍⚖️" && (
              <BookOpenIcon className=" hidden lg:block absolute -top-7 -left-7 size-14 text-sky-300  bg-[#0D0F11] rounded-full p-2 " />
            )}
            {section.title === "Lessons Learned 💡" && (
              <LightBulbIcon className="hidden lg:block absolute -top-7 -left-7 size-14 text-yellow-300  bg-[#0D0F11] rounded-full p-2 " />
            )}
            {section.steps.map((step) => (
              <div className="mb-5 px-2" key={step}>
                <Typography
                  className="my-3 max-w-4xl tracking-wide "
                  weight="medium"
                  size="sm"
                  color="white"
                >
                  {step}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectJourney;
