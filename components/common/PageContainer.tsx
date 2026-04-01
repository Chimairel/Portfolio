import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  withInnerContainer?: boolean;
}

export function PageContainer({ 
  children, 
  className, 
  innerClassName, 
  withInnerContainer = true 
}: PageContainerProps) {
  return (
    <main className={cn(
      "w-full px-6 py-8 flex justify-center min-h-screen animate-in fade-in duration-500", 
      className
    )}>
      {withInnerContainer ? (
        <div className={cn("w-full max-w-6xl flex flex-col gap-12", innerClassName)}>
          {children}
        </div>
      ) : (
        children
      )}
    </main>
  );
}
