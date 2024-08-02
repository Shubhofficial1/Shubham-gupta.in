import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Typography from "../atoms/Typography";

const ProjectNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[0D0F11] text-slate-500">
      <div className="flex flex-col justify-center items-center h-screen container">
        <Typography className="mb-5 text-center" weight="bold" size="md">
          Oops ! 🫣 The Page You're Looking For Doesn't Exist
        </Typography>

        <Typography
          className="mb-10 max-w-xl  text-center"
          weight="medium"
          color="slate"
          size="xs"
        >
          We couldn't find the page you're trying to access 🚫. It might have
          been removed, renamed, or never existed. Please check the URL or
          return to the previous page to try again.
        </Typography>

        <Button
          variant="primary"
          className={`p-2 rounded-lg`}
          onClick={() => navigate("/")}
        >
          <Typography color="white" size="base" weight="bold">
            Go Back
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default ProjectNotFound;
