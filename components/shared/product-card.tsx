import React from "react";
import Link from "next/link";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  // count?: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img
            className="w-full h-full object-contain"
            src={imageUrl}
            alt={name}
          />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce,
          tomatoes, Alfredo sauce, garlic
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            from <b>${price}</b>
          </span>

          {/* {count ? (
            <CountButton value={count} size="lg" />
          ) : ( */}
          <Button variant="secondary">
            <Plus size={16} className="mr-1" />
            Add
          </Button>
          {/* )} */}
        </div>
      </Link>
    </div>
  );
};
