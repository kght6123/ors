"use client"; // cosmosのために追加
import { Select, Option } from "$/_ui/atoms/select";
import React, { useState } from "react";
import clsx from "clsx";

// TODO: この辺りの問題があるため、他のatomなどと同様にオブジェクトで複数コンポーネントを返せない https://github.com/vercel/next.js/issues/41940

export interface Props {
  onChange?: (year: number, month: number, day: number) => void;
  className?: string;
  month: number;
  year: number;
  day: number;
}

const getDayNumber = (year: number, month: number, day: number) => {
  return new Date(year, month - 1, day).getDay();
};

const getDaysArray = (year: number, month: number) => {
  return Array.from(
    { length: new Date(year, month, 0).getDate() },
    (_, i) => i + 1
  );
};

const Base = ({ className, day, month, onChange, year }: Props) => {
  const [firstDay, setFirstDay] = useState(getDayNumber(year, month, 1));
  const [daysArray, setDaysArray] = useState(getDaysArray(year, month));
  return (
    <div className={clsx("relative p-3", className)}>
      <div
        className="absolute
      top-3 text-sm font-black text-slate-500"
      >
        <Select.Transparent
          onChange={(e) => {
            onChange && onChange(Number(e.target.value), month, 1);
            setFirstDay(getDayNumber(Number(e.target.value), month, 1));
            setDaysArray(getDaysArray(Number(e.target.value), month));
          }}
          value={year}
          size="sm"
        >
          {Array.from({ length: 10 }, (_, i) => year + i).map((value) => (
            <Option value={value} key={value}>
              {value}年
            </Option>
          ))}
        </Select.Transparent>
      </div>
      <div className="mb-6 flex content-center items-center justify-center">
        <Select.Transparent
          onChange={(e) => {
            onChange && onChange(year, Number(e.target.value), 1);
            setFirstDay(getDayNumber(year, Number(e.target.value), 1));
            setDaysArray(getDaysArray(year, Number(e.target.value)));
          }}
          value={month}
          size="xl"
        >
          {Array.from({ length: 12 }, (_, i) => i + 1).map((value) => (
            <Option value={value} key={value}>
              {value}月
            </Option>
          ))}
        </Select.Transparent>
      </div>
      <div className="grid grid-cols-7 place-content-center place-items-center text-sm font-black text-slate-700 [&>*]:h-14">
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
              "aria-pressed:relative aria-pressed:after:absolute aria-pressed:after:-left-3 aria-pressed:after:top-2 aria-pressed:after:flex aria-pressed:after:h-10 aria-pressed:after:w-10 aria-pressed:after:content-center aria-pressed:after:items-center aria-pressed:after:justify-center aria-pressed:after:rounded-full aria-pressed:after:bg-indigo-600 aria-pressed:after:text-lg aria-pressed:after:text-white aria-pressed:after:content-[attr(data-day)]"
            )}
            onClick={() => {
              onChange && onChange(year, month, value);
            }}
            aria-pressed={value === day}
            data-day={value}
            type="button"
            key={value}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

const Calendar = {
  Base,
  Now: (props: {
    onChange?: (unixTime: number) => void;
    className?: string;
    unixTime?: number;
  }) => {
    const date = new Date(props.unixTime || new Date());
    // const [year, setYear] = useState(now.getFullYear());
    // const [month, setMonth] = useState(now.getMonth() + 1);
    // const [day, setDay] = useState(now.getDate());
    return (
      <Base
        onChange={(year, month, day) => {
          // setYear(year);
          // setMonth(month);
          // setDay(day);
          const date = new Date(props.unixTime || new Date());
          date.setFullYear(year);
          date.setMonth(month - 1);
          date.setDate(day);
          props.onChange && props.onChange(date.getTime());
        }}
        className={props.className}
        month={date.getMonth() + 1}
        year={date.getFullYear()}
        day={date.getDate()}
      />
    );
  },
};

export const CalendarNow = Calendar.Now;
