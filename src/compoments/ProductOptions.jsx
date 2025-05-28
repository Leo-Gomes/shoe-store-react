import React, { useState } from 'react';
import clsx from 'clsx';

export const ProductOptions = ({ options, radius = "4px", shape = "square", type = "text" }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex gap-2 flex-wrap">
      {options.map((option, index) => {
        const isSelected = selected === index;

        const baseClasses = clsx(
          "flex items-center justify-center cursor-pointer transition-all duration-100",
          {
            "w-[46px] h-[46px] border": shape === "square",
            "w-[31px] h-[31px]": shape === "circle",
            "rounded-full": shape === "circle",
          },
          isSelected && shape === "square"
            ? "bg-primary border-2 border-primary text-white"
            : "border border-light-gray-2",
            isSelected && shape === "circle"
            ? "border-2 border-primary text-white"
            : "border border-light-gray-2",
        );

        const styles = {
          borderRadius: shape === "square" ? radius : undefined,
          backgroundColor: type === "color" ? option : undefined,
          color: type === "text" && shape !== "square" && isSelected ? "#4A4A4A" : undefined,
          fontSize: type === "text" ? "20px" : undefined,
        };

        return (
          <div
            key={index}
            className={baseClasses}
            style={styles}
            onClick={() => setSelected(index)}
          >
            {type === "text" ? option : ""}
          </div>
        );
      })}
    </div>
  );
};
