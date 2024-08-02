import Typography from "../atoms/Typography";

const Banner = () => {
  return (
    <div className="bg-[linear-gradient(to_right,#29D8FF,#623cea,#ff6978)] py-3 text-center">
      <div className="container">
        <Typography weight="medium" size="sm" className="tracking-tight">
          <span className="sm:inline hidden">
            Seeking Talent? Discover a Developer Ready to Drive Your Success -{" "}
          </span>
          <a
            href="https://cal.com/shubhamgupta/15min"
            target="_blank"
            className="underline underline-offset-4"
          >
            Get In Touch 📅
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Banner;
