import React from "react";
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

interface ProjectCardProps {
  project: IProjects;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col rounded-lg h-fit min-h-[480px]">
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
  );
};

export default ProjectCard;
