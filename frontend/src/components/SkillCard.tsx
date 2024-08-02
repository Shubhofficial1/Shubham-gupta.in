import React from "react";
import Typography from "./atoms/Typography";

interface ISkill {
  src: string;
  alt: string;
}

interface SkillCardProps {
  skill: ISkill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="flex flex-col justify-center items-center text-slate-500">
      <div className="border-[1px] border-slate-700/20 hover:bg-slate-700/20 rounded-lg w-[140px] h-[140px] overflow-hidden">
        <img
          src={skill.src}
          alt={skill.alt}
          className="flex-none w-full h-full"
        />
      </div>
      <Typography
        className="mt-2 line-clamp-1 tracking-wide"
        weight="medium"
        color="slate"
        size="sm"
      >
        {skill.alt}
      </Typography>
    </div>
  );
};

export default SkillCard;
