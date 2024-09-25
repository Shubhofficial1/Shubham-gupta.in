import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

type LinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  download?: string;
  target?: string;
  bgColor?: "primary" | "dark" | "inherit";
};

const linkVariants = cva(
  "px-5 py-3 min-w-[200px] rounded-lg cursor-pointer transition hover:scale-[1.01] hover:opacity-90 flex items-center justify-center gap-x-3",
  {
    variants: {
      bgColor: {
        primary: "bg-[#626EE3] text-white",
        dark: "bg-slate-800 text-white",
        inherit: "bg-inherit text-white",
      },
    },
    defaultVariants: {
      bgColor: "inherit",
    },
  }
);

export default function Link({
  className,
  href,
  download,
  target,
  bgColor,
  ...props
}: LinkProps) {
  return (
    <a
      href={href}
      download={download}
      target={target}
      {...props}
      className={cn(linkVariants({ bgColor }), className)}
    />
  );
}
