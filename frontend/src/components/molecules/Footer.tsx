import Typography from "../atoms/Typography";

const Footer = () => {
  return (
    <footer className="bg-[#0D0F11] py-5">
      <div className="flex flex-col justify-center items-center container">
        <Typography
          className="mb-2 line-clamp-2 max-w-4xl  text-[12px] text-center tracking-wide"
          weight="medium"
          color="slate"
        >
          © 2024 Shubham Gupta. All rights reserved.
        </Typography>
        <Typography
          className="md:flex hidden mb-2 line-clamp-3 md:line-clamp-3 max-w-5xl text-[12px] text-center capitalize tracking-wide"
          weight="medium"
          color="slate"
        >
          Built with React , TypeScript, Tailwind CSS & Framer Motion.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
