import React from "react";
import { cn } from "@/lib/utils";
import { scrollToCategory } from "../utils/scrollToCategory";

interface Props {
  className?: string;
  cats: { name: string; id: number }[];
  activeId: number;
  setActiveId: (id: number) => void;
  setIsManualScroll: (value: boolean) => void;
}

export const CategoriesList: React.FC<Props> = ({
  className,
  cats,
  activeId,
  setActiveId,
  setIsManualScroll,
}) => {
  return (
    <div className={cn("", className)}>
      {cats.map(({ name, id }) => (
        <a
          key={id}
          onClick={(e) => {
            e.preventDefault();
            scrollToCategory(id, name, setActiveId, setIsManualScroll);
          }}
          href={`/#${name}`}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeId === id && "bg-white shadow-md shadow-gray-200 text-primary"
          )}
        >
          {name}
        </a>
      ))}
    </div>
  );
};
