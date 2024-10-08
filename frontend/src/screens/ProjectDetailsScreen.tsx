import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data";
import { projectsPaths } from "../data";
import ProjectNotFound from "../components/organisms/ProjectNotFound";
import ProjectInsights from "../components/molecules/ProjectInsights";
import ProjectJourney from "../components/molecules/ProjectJourney";
import HeaderPanel from "../components/molecules/HeaderPanel";
import BreadCrumbs from "../components/molecules/BreadCrumbs";

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
