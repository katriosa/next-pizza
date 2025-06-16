"use client";

import React from "react";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

interface Props {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  className?: string;
  categoryId: number;
  // listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  className,
  categoryId,
  // listClassName,
}) => {
  const setActineCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef<HTMLDivElement | null>(null);

  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLDivElement>,
    {
      threshold: 0.4,
    }
  );

  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActineCategoryId(categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, setActineCategoryId, title]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
