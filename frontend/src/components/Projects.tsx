import { projects } from "../data";
import { useNavigate } from "react-router-dom";

interface IProjects {
  name: string;
  slug: string;
  description: string;
  type: string;
  stack: string[];
  githubUrl: string;
  liveWebsite: string;
  thumbnail: string;
}

const Projects = () => {
  const navigate = useNavigate();
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
          {projects.map((project: IProjects) => (
            <div
              className="flex flex-col rounded-lg h-fit min-h-[480px]"
              key={project.slug}
            >
              <div
                className="bg-gradient-to-b from-[#151a21]/[.5] to-[#151a21]/[1] rounded-lg w-full h-[300px] cursor-pointer overflow-hidden select-none"
                onClick={() => {
                  navigate(`/projects/${project.slug}`);
                }}
              >
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-5">
                <h1 className="mb-2 line-clamp-2 font-bold text-[24px] capitalize tracking-normal">
                  {project.name}
                </h1>
                <p className="mb-5 line-clamp-3 font-medium text-[14px] text-slate-500 tracking-wide">
                  {project.description}
                </p>
                <button
                  className="line-clamp-2 font-medium text-[14px] text-slate-500 underline underline-offset-4 uppercase tracking-normal"
                  onClick={() => {
                    navigate(`/projects/${project.slug}`);
                  }}
                >
                  VIEW PROJECT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
