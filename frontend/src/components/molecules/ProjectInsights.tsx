import Typography from "../atoms/Typography";

interface IProjectSection {
  title: string;
  summary: string;
  thumbnailUrl: string;
}

interface IProjects {
  name: string;
  slug: string;
  description: string;
  type: string;
  stack: string[];
  githubUrl: string;
  liveWebsite: string;
  thumbnail: string;
  sections: IProjectSection[];
}

interface IProjectDetailsGridProps {
  project: IProjects;
}

const ProjectInsights: React.FC<IProjectDetailsGridProps> = ({ project }) => {
  return (
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
  );
};

export default ProjectInsights;
