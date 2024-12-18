import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects, projectsPaths } from "../../Constants-test";
import ProjectNotFound from "../../Components-test/ProjectDetails/ProjectNotFound";
import ProjectInsights from "../../Components-test/ProjectDetails/ProjectInsights";
import ProjectJourney from "../../Components-test/ProjectDetails/ProjectJourney";
import HeaderPanel from "../../Components-test/Home/HeaderPanel";
import BreadCrumbs from "../../Components-test/ui/BreadCrumbs";

const ProjectDetailsScreen = () => {
  const { projectSlug } = useParams();
  const project = projects.find((project) => project.slug === projectSlug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="bg-[#0D0F11] py-10 text-white">
      <div className="container ">
        <BreadCrumbs paths={projectsPaths} />
        <div className="bg-gradient-to-b from-[#151a21]/[.5] to-[#151a21]/[1] rounded-lg w-full h-[400px] overflow-hidden select-none">
          <img
            src={project.thumbnail}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
        <HeaderPanel title={project.name} summary={project.description} />
        <ProjectInsights project={project} />
        <ProjectJourney sections={project.sections} />
      </div>
    </div>
  );
};

export default ProjectDetailsScreen;
