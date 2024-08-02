import { experiences } from "../data";
import ExperienceCard from "./ExperienceCard";
import Typography from "./atoms/Typography";

const Experience = () => {
  return (
    <div className="bg-[#0D0F11] pt-20 pb-32 text-white">
      <div className="container">
        <Typography className="mb-2 line-clamp-3" weight="bold" size="lg">
          My Professional Experience
        </Typography>

        <Typography
          className="mb-5 line-clamp-5 md:line-clamp-3 max-w-4xl tracking-wide"
          weight="medium"
          size="sm"
          color="slate"
        >
          Throughout my career, I've had the privilege of contributing to and
          learning from some of the best in the industry. Each position has
          enriched my skills, broadened my perspective, and reinforced my
          commitment to excellence. Take a look at the roles I've excelled in
          and the impact I've made along the way.
        </Typography>

        <div className="flex flex-col bg-gradient-to-t from-[#151a21]/[.5] to-[#151a21]/[1] my-16 px-5 md:px-10 py-5 rounded-lg max-w-4xl">
          <Typography className="mb-5" weight="bold" color="white" size="base">
            Career Journey
          </Typography>
          {experiences.map((experience) => (
            <ExperienceCard experience={experience} key={experience._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
