import ProjectCard from "../molecules/ProjectCard";
import { projects } from "../../data";
import HeaderPanel from "../molecules/HeaderPanel";

const Projects = () => {
  return (
    <div className="bg-[#0D0F11] py-36 text-white">
      <div className="container">
        <HeaderPanel
          title="What I've Been Working On"
          summary={
            " When I'm not busy battling bugs or deciphering cryptic error messages, I'm creating cool stuff! Whether it's a tool for real-time collaboration or an e-commerce platform, my projects reflect my love for problem-solving and my ability to multitask like a pro (or at least, I try! 😅)."
          }
        />

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
