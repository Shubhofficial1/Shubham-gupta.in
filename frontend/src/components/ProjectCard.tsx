import React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "./atoms/Typography";
import Button from "./atoms/Button";

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
        <Typography className="mb-2 line-clamp-2" weight="bold" size="md">
          {project.name}
        </Typography>

        <Typography
          className="mb-5 line-clamp-3 tracking-wide"
          weight="medium"
          size="xs"
          color="slate"
        >
          {project.description}
        </Typography>

        <Button
          variant="ghost"
          className="underline underline-offset-4 uppercase"
          onClick={() => {
            navigate(`/projects/${project.slug}`);
          }}
        >
          VIEW PROJECT
          <Typography className="" size="xs" weight="medium"></Typography>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
