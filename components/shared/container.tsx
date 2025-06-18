import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-[1280px] px-6 2xl:max-w-[1600px]",
        className
      )}
    >
      {children}
    </div>
  );
};
