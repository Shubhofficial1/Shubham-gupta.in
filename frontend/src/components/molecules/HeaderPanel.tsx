import Typography from "../atoms/Typography";

interface IHeaderPanelProps {
  title: string;
  summary: string;
}

const HeaderPanel: React.FC<IHeaderPanelProps> = ({ title, summary }) => {
  return (
    <>
      <Typography className="mt-5 mb-3 line-clamp-2" weight="bold" size="lg">
        {title}
      </Typography>
      <Typography
        className="my-3 max-w-4xl tracking-wide"
        weight="medium"
        size="sm"
        color="slate"
      >
        {summary}
      </Typography>
    </>
  );
};

export default HeaderPanel;
