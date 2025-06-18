"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { CategoriesList, CategoriesSelector } from "./";

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "Pizzas" },
  { id: 2, name: "Combos" },
  { id: 3, name: "Snacks" },
  { id: 4, name: "Cocktails" },
  { id: 5, name: "Drinks" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const activeId = useCategoryStore((state) => state.activeId);
  const { setActiveId, setIsManualScroll } = useCategoryStore.getState();

  return (
    <div className={cn(" bg-gray-50 p-1 rounded-2xl", className)}>
      <CategoriesSelector
        className="md:hidden"
        activeId={activeId}
        cats={cats}
        setActiveId={setActiveId}
        setIsManualScroll={setIsManualScroll}
      />
      <CategoriesList
        className="hidden md:flex gap-1"
        cats={cats}
        activeId={activeId}
        setActiveId={setActiveId}
        setIsManualScroll={setIsManualScroll}
      />
    </div>
  );
};
