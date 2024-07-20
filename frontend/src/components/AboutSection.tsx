import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-[#0D0F11] py-[72px] sm:py-24 text-white">
      <div className="container">
        <div className="bg-[#151A21] px-8 py-6 rounded-md max-w-3xl">
          <h1 className="font-bold text-[20px] tracking-tight">About</h1>
          <p className="mt-3 font-medium text-[16px] text-slate-400 tracking-wide">
            I'm a 24-year-old student at Uttar Pradesh Technical University,
            currently studying web development and design. As I've grown as a
            developer, I've worked alongside senior designers and developers who
            have raised my standards for what is expected of any web
            application.
            {isExpanded && (
              <>
                {" "}
                I am passionate about learning new technologies and continuously
                improving my skills. My goal is to develop web applications that
                provide excellent user experiences and meet the highest
                standards of quality and performance.{" "}
              </>
            )}
            <button onClick={toggleReadMore} className="ml-2 text-indigo-400">
              {isExpanded ? (
                <div className="flex items-center gap-2">
                  <p className="font-medium text-[14px] tracking-wide">
                    Read Less
                  </p>
                  <ChevronUpIcon className="size-3" />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <p className="font-medium text-[14px] tracking-wide">
                    Read More
                  </p>
                  <ChevronDownIcon className="size-3" />
                </div>
              )}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
