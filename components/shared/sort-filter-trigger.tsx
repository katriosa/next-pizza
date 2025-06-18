import React from "react";
import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";

interface Props {
  className?: string;
}

export const SortFilterTrigger: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center  bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer",
        className
      )}
    >
      <SlidersHorizontal size={16} />
    </div>
  );
};
