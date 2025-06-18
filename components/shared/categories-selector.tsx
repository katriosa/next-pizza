"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { scrollToCategory } from "../utils/scrollToCategory";

interface Props {
  className?: string;
  activeId: number;
  cats: { name: string; id: number }[];
  setActiveId: (id: number) => void;
  setIsManualScroll: (value: boolean) => void;
}

export const CategoriesSelector: React.FC<Props> = ({
  className,
  activeId,
  cats,
  setActiveId,
  setIsManualScroll,
}) => {
  return (
    <div className={className}>
      <Select
        value={String(activeId)}
        onValueChange={(value) => {
          const id = Number(value);
          const selected = cats.find((c) => c.id === id);
          console.log("value", value);
          console.log("id", id);
          console.log("selected", selected);
          if (selected) {
            scrollToCategory(
              selected.id,
              selected.name,
              setActiveId,
              setIsManualScroll
            );
          }
        }}
      >
        <SelectTrigger className="w-[140px] bg-white shadow-md shadow-gray-200  cursor-pointer font-bold px-5 py-5 rounded-2xl">
          <SelectValue placeholder="Pizzas" />
        </SelectTrigger>
        <SelectContent>
          {cats.map(({ name, id }) => (
            <SelectItem key={id} value={String(id)}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
