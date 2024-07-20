import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [projects] = useState([
    {
      name: "Collaborative Whiteboard",
      slug: "collaborative-whiteboard",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga soluta esse nesciunt, voluptatum veniam architecto magnam corporis assumenda mollitia beatae.",
      type: "Personal",
      stack: ["React", "Socket.io", "tailwind", "NodeJS"],
      githubUrl: "Lorem ipsum dolor sit amet.",
      liveWebsite: "Lorem ipsum dolor sit",
      thumbnail: "src/assets/images/1.jpg",
    },
    {
      name: "Connect",
      slug: "connect",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga soluta esse nesciunt, voluptatum veniam architecto magnam corporis assumenda mollitia beatae.",
      type: "Personal",
      stack: ["React", "Socket.io", "tailwind", "NodeJS"],
      githubUrl: "Lorem ipsum dolor sit amet.",
      liveWebsite: "Lorem ipsum dolor sit",
      thumbnail: "src/assets/images/2.jpg",
    },
    {
      name: "Proshop",
      slug: "proshop",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga soluta esse nesciunt, voluptatum veniam architecto magnam corporis assumenda mollitia beatae.",
      type: "Personal",
      stack: ["React", "Socket.io", "tailwind", "NodeJS"],
      githubUrl: "Lorem ipsum dolor sit amet.",
      liveWebsite: "Lorem ipsum dolor sit",
      thumbnail: "src/assets/images/3.jpg",
    },
    {
      name: "Edemy",
      slug: "edemy",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga soluta esse nesciunt, voluptatum veniam architecto magnam corporis assumenda mollitia beatae.",
      type: "Personal",
      stack: ["React", "Socket.io", "tailwind", "NodeJS"],
      githubUrl: "Lorem ipsum dolor sit amet.",
      liveWebsite: "Lorem ipsum dolor sit",
      thumbnail: "src/assets/images/4.jpg",
    },
  ]);
  const navigate = useNavigate();

  return (
    <div className="bg-[#0D0F11] py-[72px] sm:py-24 text-white">
      <div className="container">
        <h1 className="mb-2 line-clamp-3 font-bold text-[40px] capitalize tracking-normal">
          What I've Been Working On
        </h1>
        <p className="mb-5 line-clamp-5 md:line-clamp-6 max-w-4xl font-medium text-[16px] text-slate-500 tracking-wide">
          I like to stay busy and always have a project in the works. Take a
          look at some of the applications and bootathon I've dedicated my time
          to.
        </p>
        <div className="gap-10 lg:gap-14 grid grid-cols-1 md:grid-cols-2 my-20">
          {projects.map((project) => (
            <div
              className="flex flex-col rounded-lg h-fit min-h-[480px]"
              key={project.name}
            >
              <div className="bg-gradient-to-b from-[#151a21]/[.5] to-[#151a21]/[1] rounded-lg w-full h-[300px] overflow-hidden select-none">
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
                    navigate(project.slug);
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
