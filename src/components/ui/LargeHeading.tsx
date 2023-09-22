import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariant = cva(
  "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariant> {}

// eslint-disable-next-line react/display-name
const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        {...props}
        className={cn(headingVariant({ size, className }))}
      >
        {children}
      </h3>
    );
  }
);

LargeHeading.displayName = "LargeHeading";

export default LargeHeading;
