import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Typography from "../components/atoms/Typography";

const ProjectDetailsScreen = () => {
  const { projectSlug } = useParams();
  const project = projects.find((project) => project.slug === projectSlug);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return (
      <div className="bg-[0D0F11] text-slate-500">
        <div className="flex flex-col justify-center items-center h-screen container">
          <Typography className="mb-5 text-[20px]" weight="bold">
            Oops ! 🫣 The Page You're Looking For Doesn't Exist
          </Typography>

          <Typography
            className="mb-10 max-w-xl text-[12px] text-center "
            weight="medium"
            color="slate"
          >
            We couldn't find the page you're trying to access 🚫. It might have
            been removed, renamed, or never existed. Please check the URL or
            return to the previous page to try again.
          </Typography>

          <button
            className={`p-2 min-w-[150px] bg-indigo-500 hover:bg-indigo-400 rounded-lg cursor-pointer flex items-center justify-center gap-3`}
            onClick={() => navigate("/")}
          >
            <Typography color="white" size="base" weight="bold">
              Go Back
            </Typography>
          </button>
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

        <Typography className="mt-5 mb-3 line-clamp-2" weight="bold" size="lg">
          {project.name}
        </Typography>

        <Typography
          className="my-3 max-w-4xl tracking-wide"
          weight="medium"
          size="sm"
          color="slate"
        >
          {project.description}
        </Typography>

        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10">
          <div className="flex flex-col gap-3">
            <Typography className="text-[24px]" weight="bold">
              Type
            </Typography>
            <Typography
              className="line-clamp-1 text-[14px] tracking-wide"
              weight="medium"
              color="slate"
            >
              {project.type}
            </Typography>
          </div>
          <div className="flex flex-col gap-3">
            <Typography className="text-[24px]" weight="bold">
              Tech Stack
            </Typography>
            {project.stack.map((stk) => (
              <Typography
                className="line-clamp-1 tracking-wide"
                key={stk}
                weight="medium"
                size="sm"
                color="slate"
              >
                {stk}
              </Typography>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Typography className="text-[24px]" weight="bold">
              Code
            </Typography>
            <a
              href={project.githubUrl}
              target="_blank"
              className="line-clamp-1 w-fit font-medium text-[14px] text-blue-500 underline underline-offset-4 tracking-wide"
            >
              Respository
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <Typography className="text-[24px]" weight="bold">
              Live
            </Typography>
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
                <Typography className="mb-5 text-[32px]" weight="bold">
                  {section.title}
                </Typography>
                <Typography
                  className="leading-relaxed tracking-wide"
                  weight="medium"
                  size="xs"
                  color="slate"
                >
                  {section.summary}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsScreen;
