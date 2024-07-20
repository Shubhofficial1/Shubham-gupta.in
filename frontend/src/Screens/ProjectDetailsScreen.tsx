import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data";

const ProjectDetailsScreen = () => {
  const { projectSlug } = useParams();
  const project = projects.find((project) => project.slug === projectSlug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return (
      <div className="bg-[0D0F11] text-white">
        <div className="flex justify-center items-center h-screen container">
          <h1 className="font-bold text-[20px] capitalize tracking-normal">
            Project Not Found.
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0D0F11] py-[72px] sm:py-24 text-white">
      <div className="container">
        <div className="rounded-lg w-full h-[400px] overflow-hidden select-none">
          <img
            src={project.thumbnail}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="mt-5 mb-3 line-clamp-2 font-bold text-[40px] capitalize tracking-normal">
          {project.name}
        </h1>
        <p className="my-3 max-w-4xl font-medium text-[16px] text-slate-500 tracking-wide">
          {project.description}
        </p>
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[24px] capitalize tracking-normal">
              Type
            </h1>
            <p className="line-clamp-1 font-medium text-[14px] text-slate-500 tracking-wide">
              {project.type}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[24px] capitalize tracking-normal">
              Tech Stack
            </h1>
            {project.stack.map((stk) => (
              <p className="line-clamp-1 font-medium text-[14px] text-slate-500 tracking-wide">
                {stk}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[24px] capitalize tracking-normal">
              Code
            </h1>
            <a
              href={project.githubUrl}
              target="_blank"
              className="line-clamp-1 font-medium text-[14px] text-blue-500 underline underline-offset-4 tracking-wide"
            >
              Respository
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-[24px] capitalize tracking-normal">
              Live
            </h1>
            <a
              href={project.liveWebsite}
              target="_blank"
              className="line-clamp-1 font-medium text-[14px] text-blue-500 underline underline-offset-4 tracking-wide"
            >
              View Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsScreen;
