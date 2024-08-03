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
          <a
            href="mailto:[shubhofficial1@gmail.com]?subject=Let's Collaborate!&body=Hi Shubham,%0D%0A%0D%0AI came across your portfolio and I'm impressed by your work. I'd love to discuss potential collaboration opportunities with you.%0D%0A%0D%0AThanks,%0D%0A[Your Name]"
            className="font-bold text-sky-500 hover:underline underline-offset-4 cursor-pointer"
          >
            shubhofficial1@gmail.com
          </a>
          . You can also find me on{" "}
          <a
            href="https://www.linkedin.com/in/shubhofficial1/"
            target="_blank"
            className="font-bold text-sky-400 hover:underline underline-offset-4 cursor-pointer"
          >
            LinkedIn
          </a>{" "}
          ,{" "}
          <a
            href="https://github.com/Shubhofficial1"
            target="_blank"
            className="font-bold text-sky-500 hover:underline underline-offset-4 cursor-pointer"
          >
            Github
          </a>{" "}
          and{" "}
          <a
            href="https://twitter.com/shubhofficial0"
            target="_blank"
            className="font-bold text-sky-400 hover:underline underline-offset-4 cursor-pointer"
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
