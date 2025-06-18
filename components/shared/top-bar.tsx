import React from "react";
import { cn } from "@/lib/utils";
import { Categories } from "./categories";
import { SortSelector } from "./sort-selector";
import { Container } from "./container";
import { Cart } from "./cart";
import { SortFilterTrigger } from "./sort-filter-trigger";

interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between gap-4">
        <Categories />

        <div className="flex items-center gap-4">
          <SortSelector className="hidden lg:inline-flex" />
          <SortFilterTrigger className="lg:hidden" />

          <Cart />
        </div>
      </Container>
    </div>
  );
};
