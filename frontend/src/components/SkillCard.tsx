import React from "react";

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
      <h1 className="mt-2 line-clamp-1 font-medium text-[18px] text-500 capitalize tracking-wide">
        {skill.alt}
      </h1>
    </div>
  );
};

export default SkillCard;
