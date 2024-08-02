import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import Typography from "./atoms/Typography";

const Projects = () => {
  return (
    <div className="bg-[#0D0F11] py-36 text-white">
      <div className="container">
        <Typography className="mb-2 line-clamp-2" weight="bold" size="lg">
          What I've Been Working On
        </Typography>

        <Typography
          className="mb-5 line-clamp-5 md:line-clamp-3 max-w-4xl tracking-wide"
          weight="medium"
          size="sm"
          color="slate"
        >
          When I'm not busy battling bugs or deciphering cryptic error messages,
          I'm creating cool stuff! Whether it's a tool for real-time
          collaboration or an e-commerce platform, my projects reflect my love
          for problem-solving and my ability to multitask like a pro (or at
          least, I try! 😅).
        </Typography>

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
