import { projects } from "../data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="bg-[#0D0F11] py-36 text-white">
      <div className="container">
        <h1 className="mb-2 line-clamp-3 font-bold text-[40px] capitalize tracking-normal">
          What I've Been Working On
        </h1>
        <p className="mb-5 line-clamp-5 md:line-clamp-3 max-w-4xl font-medium text-[16px] text-slate-500 tracking-wide">
          I like to stay busy and always have a project in the works. From
          real-time collaboration tools to comprehensive e-commerce platforms,
          these projects reflect my commitment to excellence and my ability to
          tackle diverse challenges.
        </p>
        <div className="gap-10 lg:gap-14 grid grid-cols-1 md:grid-cols-2 my-20">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
