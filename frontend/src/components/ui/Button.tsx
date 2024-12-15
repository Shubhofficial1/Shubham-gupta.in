import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

const buttonVariants = cva("line-clamp-1 text-[14px] font-medium", {
  variants: {
    variant: {
      primary: "bg-indigo-500 hover:bg-indigo-400",
      ghost: "bg-inherit text-slate-500",
    },
  },
  defaultVariants: {
    variant: "ghost",
  },
});

export default function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
}
