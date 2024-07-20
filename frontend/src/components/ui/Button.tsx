import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, bgColor, onClick }) => {
  return (
    <button
      className={`z-10 px-5 py-3 min-w-[200px] ${
        bgColor ? bgColor : "bg-slate-800"
      } rounded-lg cursor-pointer transition hover:scale-105 flex items-center justify-center gap-3`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
