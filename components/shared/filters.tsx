import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Mix & match" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from – to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30}
            defaultValue={0}
          />
          <Input type="number" min={1} max={30} placeholder="30" />
        </div>

        <RangeSlider min={0} max={50} step={5} value={[0, 50]} />
      </div>

      <CheckboxFiltersGroup
        title="Ingredients"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            value: "1",
            text: "Tomato",
          },
          {
            value: "2",
            text: "Onion",
          },
          {
            value: "3",
            text: "Mushroom",
          },
          {
            value: "4",
            text: "Cheese",
          },
          {
            value: "5",
            text: "Pepper",
          },
          {
            value: "6",
            text: "Olives",
          },
        ]}
        items={[
          {
            value: "1",
            text: "Tomato",
          },
          {
            value: "2",
            text: "Onion",
          },
          {
            value: "3",
            text: "Mushroom",
          },
          {
            value: "4",
            text: "Cheese",
          },
          {
            value: "5",
            text: "Pepper",
          },
          {
            value: "6",
            text: "Olives",
          },
          {
            value: "7",
            text: "Mushroom",
          },
          {
            value: "8",
            text: "Cheese",
          },
          {
            value: "9",
            text: "Pepper",
          },
          {
            value: "10",
            text: "Olives",
          },
          {
            value: "11",
            text: "Tomato",
          },
        ]}
      />
    </div>
  );
};
