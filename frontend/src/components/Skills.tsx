import reactLogo from "../assets/logos/react.svg";
import nextJsLogo from "../assets/logos/nextjs.svg";
import javascriptLogo from "../assets/logos/javascript.svg";
import mongoDbLogo from "../assets/logos/mongodb.svg";
import prismaLogo from "../assets/logos/prisma.svg";
import postgresLogo from "../assets/logos/postgres.svg";
import redisLogo from "../assets/logos/redis.svg";
import githubLogo from "../assets/logos/github.svg";
import awsLogo from "../assets/logos/aws.svg";
import graphqlLogo from "../assets/logos/graphql.svg";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const skills = [
  { src: reactLogo, alt: "React" },
  { src: nextJsLogo, alt: "NextJS" },
  { src: javascriptLogo, alt: "Javascript" },
  { src: mongoDbLogo, alt: "MongoDB" },
  { src: prismaLogo, alt: "Prisma" },
  { src: postgresLogo, alt: "Postgres" },
  { src: redisLogo, alt: "Redis" },
  { src: githubLogo, alt: "Github" },
  { src: awsLogo, alt: "Aws" },
  { src: graphqlLogo, alt: "Graphql" },
];

interface ISkill {
  src: string;
  alt: string;
}

const Skills = () => {
  return (
    <div className="bg-[#0D0F11] py-36 text-white">
      <div className="container">
        <h1 className="mb-2 line-clamp-2 font-bold text-[40px] capitalize tracking-normal">
          My Skills
        </h1>

        <p className="mb-5 line-clamp-5 md:line-clamp-3 max-w-4xl font-medium text-[16px] text-slate-500 tracking-wide">
          Through my studies, I've gained a solid understanding of computer
          science and web development concepts, and have dedicated a lot of my
          free time to apply these concepts to real-world scenarios and
          applications.
        </p>

        <div className="relative before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#0D0F11,rgb(0,0,0,0))] after:right-0 before:left-0 after:bg-[linear-gradient(to_left,#0D0F11,rgb(0,0,0,0))] before:z-10 before:absolute after:absolute flex before:content-[''] after:content-[''] mt-20 before:w-5 after:w-5 before:h-full after:h-full overflow-hidden select-none">
          <motion.div
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: "-50%" }}
            className="flex flex-none gap-16 pr-16"
          >
            {skills.map((skill: ISkill) => (
              <SkillCard skill={skill} key={skill.alt} />
            ))}
            {skills.map((skill: ISkill) => (
              <SkillCard skill={skill} key={skill.alt} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
