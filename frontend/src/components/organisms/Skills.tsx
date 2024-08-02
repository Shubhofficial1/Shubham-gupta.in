import SkillCard from "../molecules/SkillCard";
import HeaderPanel from "../molecules/HeaderPanel";
import { skills } from "../../data";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="bg-[#0D0F11] py-36 text-white">
      <div className="container">
        <HeaderPanel
          title={"My Skills"}
          summary={
            " From diving deep into computer science theories to building practical web applications, I've honed my skills through both study and hands-on experience. I've spent countless hours turning concepts into real-world solutions, and I'm always eager to learn more and tackle new challenges."
          }
        />

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
            {skills.concat(skills).map((skill, index) => (
              <SkillCard skill={skill} key={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
