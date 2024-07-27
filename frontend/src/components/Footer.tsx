const Footer = () => {
  return (
    <footer className="bg-[#0D0F11] py-5">
      <div className="flex flex-col justify-center items-center container">
        <p className="mb-2 line-clamp-2 max-w-4xl font-medium text-[12px] text-center text-slate-500 tracking-wide">
          © 2024 Shubham Gupta. All rights reserved.
        </p>
        <p className="md:flex hidden mb-2 line-clamp-3 md:line-clamp-3 max-w-5xl font-medium text-[12px] text-center text-slate-500 capitalize tracking-wide">
          Built with React , TypeScript, Tailwind CSS & Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
