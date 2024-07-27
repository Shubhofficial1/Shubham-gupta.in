import { experiences } from "../data";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="bg-[#0D0F11] pt-20 pb-32 text-white">
      <div className="container">
        <h1 className="mb-2 line-clamp-3 font-bold text-[40px] capitalize tracking-normal">
          My Professional Experience
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
          {experiences.map((experience) => (
            <ExperienceCard experience={experience} key={experience._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
