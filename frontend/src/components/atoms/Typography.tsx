import { cva } from "class-variance-authority";
import { cn } from "../../utils/cn";

type TypographyProps = React.HTMLAttributes<HTMLHeadingElement> & {
  size?: "xs" | "sm" | "base" | "md" | "lg";
  color?: "white" | "slate";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
};

const typographyVariants = cva(
  "tracking-normal selection:bg-indigo-500 selection:text-white",
  {
    variants: {
      size: {
        xs: "text-[14px]",
        sm: "text-[16px]",
        base: "text-[18px]",
        md: "text-[24px]",
        lg: "text-[40px]",
      },
      color: { white: "text-white ", slate: "text-slate-500 " },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      size: "base",
      color: "white",
      weight: "normal",
    },
  }
);

export default function Typography({
  className,
  size,
  color,
  weight,
  ...props
}: TypographyProps) {
  return (
    <h1
      {...props}
      className={cn(typographyVariants({ size, color, weight }), className)}
    />
  );
}
