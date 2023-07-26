import { Rounded, Color, Size } from "$/_ui";
import React from "react";
import clsx from "clsx";

export interface Props {
  className?: string;
  month: number;
  year: number;
  day: number;
}

const Base = ({ className, day, month, year }: Props) => {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysArray = Array.from(
    { length: new Date(year, month, 0).getDate() },
    (_, i) => i + 1
  );

  return (
    <div className={clsx("relative p-3", className)}>
      <div className="absolute top-0 text-sm font-black text-gray-500">
        {year}年
      </div>
      <div className="mb-6 text-center text-xl font-black">{month}月</div>
      <div className="grid grid-cols-7 place-content-center place-items-center text-sm font-black text-gray-700 [&>*]:h-14">
        <div className="text-red-600">日</div>
        <div>月</div>
        <div>火</div>
        <div>水</div>
        <div>木</div>
        <div>金</div>
        <div className="text-blue-600">土</div>
        {Array.from({ length: firstDay }, (_, i) => i + 1).map((day) => (
          <div key={`empty-${day}`}>&nbsp;</div>
        ))}
        {daysArray.map((value, index) => (
          <div
            className={clsx(
              (firstDay + index + 1) % 7 === 0 && "text-blue-600",
              (firstDay + index + 1) % 7 === 1 && "text-red-600",
              value === day &&
                "relative before:absolute before:h-9 before:w-9 before:rounded-full before:bg-indigo-600 before:text-white"
            )}
            key={value}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

const Calendar = {
  Base,
  Basic: (
    props: Props & {
      color?: Color;
    }
  ) => {
    const { color = "secondary" } = props;
    return (
      <Base
        {...props}
        className={clsx(
          "container",
          color === "primary" &&
            "bg-primary-50 text-primary-950 hover:bg-primary-100",
          color === "secondary" &&
            "bg-secondary-50 text-secondary-950 hover:bg-secondary-100",
          props.className
        )}
      />
    );
  },
};

export { Calendar };
