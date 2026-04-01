import { cn } from "@/lib/utils";

interface RetroBlockProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export function RetroBlock({ className, as: Component = "div", ...props }: RetroBlockProps) {
  return (
    <Component
      className={cn(
        "border-2 border-border shadow-[4px_4px_0px_0px_var(--color-border)] transition-colors duration-200",
        className
      )}
      {...props}
    />
  );
}
