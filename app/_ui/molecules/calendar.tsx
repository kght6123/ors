"use client";
import React from "react";
import clsx from "clsx";

// TODO: この辺りの問題があるため、他のatomなどと同様にオブジェクトで複数コンポーネントを返せない https://github.com/vercel/next.js/issues/41940

export interface Props {
  onChange?: (day: number) => void;
  className?: string;
  month: number;
  year: number;
  day: number;
}

const Calendar = ({ className, day, month, onChange, year }: Props) => {
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
          <button
            className={clsx(
              (firstDay + index + 1) % 7 === 0 && "text-blue-600",
              (firstDay + index + 1) % 7 === 1 && "text-red-600",
              // 選択した日付を強調する
              "aria-pressed:relative aria-pressed:after:absolute aria-pressed:after:-left-3 aria-pressed:after:top-[-0.55rem] aria-pressed:after:flex aria-pressed:after:h-10 aria-pressed:after:w-10 aria-pressed:after:content-center aria-pressed:after:items-center aria-pressed:after:justify-center aria-pressed:after:rounded-full aria-pressed:after:bg-indigo-600 aria-pressed:after:text-lg aria-pressed:after:text-white aria-pressed:after:content-[attr(data-day)]"
            )}
            onClick={() => onChange && onChange(value)}
            aria-pressed={value === day}
            data-day={value}
            key={value}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export { Calendar };
