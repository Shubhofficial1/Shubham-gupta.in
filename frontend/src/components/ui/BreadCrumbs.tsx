import { Link } from "react-router-dom";

interface IBreadCrumbs {
  label: string;
  link: string;
}

interface IBreadCrumbsProps {
  paths: IBreadCrumbs[];
}

const BreadCrumbs: React.FC<IBreadCrumbsProps> = ({ paths }) => {
  return (
    <nav className="flex text-base mt-12 mb-8">
      {paths &&
        paths?.map((path, index) => (
          <span key={index} className="">
            {index < paths.length - 1 ? (
              <div className="flex items-center">
                <Link
                  to={path?.link}
                  className="font-semibold text-md tracking-tight text-slate-100 hover:underline underline-offset-4 capitalize selection:bg-indigo-500 selection:text-white"
                >
                  {path?.label}
                </Link>
                <span className="mx-2 font-semibold text-md tracking-tight text-slate-500 capitalize select-none">
                  /
                </span>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="font-semibold text-md tracking-tight text-slate-500 capitalize selection:bg-indigo-500 selection:text-white ">
                  {path?.label}
                </span>
              </div>
            )}
          </span>
        ))}
    </nav>
  );
};

export default BreadCrumbs;
