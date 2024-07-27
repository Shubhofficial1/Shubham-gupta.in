import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

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
        <Link to={"/"} aria-label="Go back">
          <ArrowLeftCircleIcon className="border-slate-800 hover:border-[2px] mb-8 rounded-full cursor-pointer fill-slate-600 size-14" />
        </Link>
        <div className="bg-gradient-to-b from-[#151a21]/[.5] to-[#151a21]/[1] rounded-lg w-full h-[400px] overflow-hidden select-none">
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
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10">
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
              <p
                className="line-clamp-1 font-medium text-[14px] text-slate-500 tracking-wide"
                key={stk}
              >
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
              className="line-clamp-1 w-fit font-medium text-[14px] text-blue-500 underline underline-offset-4 tracking-wide"
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
              className="line-clamp-1 w-fit font-medium text-[14px] text-blue-500 underline underline-offset-4 tracking-wide"
            >
              View Site
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-32 md:gap-y-52 lg:gap-y-80 my-32">
          {project.sections.map((section, index) => (
            <div
              className="gap-x-32 gap-y-10 grid grid-cols-1 lg:grid-cols-2"
              key={section.title}
            >
              <div
                className={`bg-gradient-to-b from-[#151a21]/[.5] to-[#151a21]/[1] rounded-lg w-full h-[350px]  overflow-hidden  ${
                  index % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                <img
                  src={section.thumbnailUrl}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-full">
                <h1 className="mb-5 font-bold text-[32px] capitalize tracking-normal">
                  {section.title}
                </h1>
                <p className="font-medium text-[14px] text-slate-500 leading-relaxed tracking-wide">
                  {section.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsScreen;
