import Typography from "../atoms/Typography";

interface ISections {
  title: string;
  summary: string;
  thumbnailUrl: string;
}

interface IProjectJourneyProps {
  sections: ISections[];
}

const ProjectJourney: React.FC<IProjectJourneyProps> = ({ sections }) => {
  return (
    <div className="flex flex-col gap-y-32 md:gap-y-52 lg:gap-y-80 my-32">
      {sections.map((section, index) => (
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
  );
};

export default ProjectJourney;
