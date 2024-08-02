import Typography from "../atoms/Typography";

const GetInTouch = () => {
  return (
    <div className="bg-[#0D0F11]  pb-32 text-white">
      <div className="container">
        <Typography className="mt-5 mb-3 line-clamp-2" weight="bold" size="lg">
          Get In Touch
        </Typography>

        <Typography
          className="my-3 max-w-4xl tracking-wide"
          weight="medium"
          size="sm"
          color="slate"
        >
          Do you have a job opportunity or idea you'd like to discuss ? Feel
          free to reach me at{" "}
          <span className="text-blue-400">shubhofficial1@gmail.com</span>. You
          can also find me on{" "}
          <a
            href="https://www.linkedin.com/in/shubhofficial1/"
            target="_blank"
            className="text-blue-400 hover:underline underline-offset-4 cursor-pointer"
          >
            LinkedIn
          </a>{" "}
          ,{" "}
          <a
            href="https://github.com/Shubhofficial1"
            target="_blank"
            className="text-blue-400 hover:underline underline-offset-4 cursor-pointer"
          >
            Github
          </a>{" "}
          and{" "}
          <a
            href="https://twitter.com/shubhofficial0"
            target="_blank"
            className="text-blue-400 hover:underline underline-offset-4 cursor-pointer"
          >
            Twitter
          </a>
          .
        </Typography>
      </div>
    </div>
  );
};

export default GetInTouch;
