import Typography from "../atoms/Typography";
import Link from "../atoms/Link";
import { EnvelopeIcon, FolderArrowDownIcon } from "@heroicons/react/24/solid";

const CtaButtons = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-y-4 sm:gap-x-4 md:gap-y-0 my-6 md:my-8">
      <Link
        href="mailto:[shubhofficial1@gmail.com]?subject=Let's Collaborate!&body=Hi Shubham,%0D%0A%0D%0AI came across your portfolio and I'm impressed by your work. I'd love to discuss potential collaboration opportunities with you.%0D%0A%0D%0AThanks,%0D%0A[Your Name]"
        bgColor="dark"
      >
        <Typography
          className="tracking-tight "
          weight="bold"
          color="white"
          size="base"
        >
          Contact Me
        </Typography>
        <EnvelopeIcon className="size-6" />
      </Link>

      <Link href="/Resume.pdf" download={"SHUBHAM KUMAR"} bgColor="primary">
        <Typography
          className="tracking-tight "
          weight="bold"
          color="white"
          size="base"
        >
          Download CV
        </Typography>
        <FolderArrowDownIcon className="size-6" />
      </Link>
    </div>
  );
};

export default CtaButtons;
