import { Rounded, Color, Size } from "$/_ui";
import React from "react";
import clsx from "clsx";

export interface Props {
  className?: string;
  monthIndex: number;
  year: number;
}

const Base = ({ className, monthIndex, year }: Props) => {
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const daysArray = Array.from(
    { length: new Date(year, monthIndex + 1, 0).getDate() },
    (_, i) => i + 1
  );
  return (
    <div className={clsx("relative", className)}>
      <div className="absolute">{year}年</div>
      <div className="text-center">{monthIndex + 1}月</div>
      <div className="grid grid-cols-7 place-content-center place-items-center [&>*]:h-14">
        <div>日</div>
        <div>月</div>
        <div>火</div>
        <div>水</div>
        <div>木</div>
        <div>金</div>
        <div>土</div>
        {Array.from({ length: firstDay }, (_, i) => i + 1).map((day) => (
          <div key={`empty-${day}`}>&nbsp;</div>
        ))}
        {daysArray.map((day) => (
          <div key={day}>{day}</div>
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
