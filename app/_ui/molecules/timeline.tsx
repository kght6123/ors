"use client";
import React, { useState } from "react";
import clsx from "clsx";

// TODO: この辺りの問題があるため、他のatomなどと同様にオブジェクトで複数コンポーネントを返せない https://github.com/vercel/next.js/issues/41940

export interface Props {
  onChange?: (value?: string) => void;
  reservedTimeList?: string[];
  disabledTimeList?: string[];
  splitMinute?: number;
  className?: string;
  value?: string;
}

const Base = ({
  className,
  disabledTimeList,
  onChange,
  reservedTimeList,
  splitMinute = 60,
  value,
}: Props) => {
  const timelines = Array.from({ length: (12 * 60) / splitMinute });
  return (
    <ul className={clsx("relative flex flex-col", className)}>
      {timelines.map((_value, index) => {
        const localeTimeString = new Date(
          1900,
          1 - 1,
          1,
          9,
          splitMinute * index,
          0
        ).toLocaleTimeString();
        const time =
          localeTimeString.length > 7
            ? localeTimeString.substring(0, 5)
            : localeTimeString.substring(0, 4);
        return (
          <li
            className="flex flex-row content-center items-center px-4 py-2 odd:bg-slate-50 even:bg-slate-100"
            key={index}
          >
            <div className="w-16 pr-4 text-right text-sm font-black text-slate-500">
              {time}
            </div>
            <div className="w-full">
              {reservedTimeList !== undefined &&
              reservedTimeList.includes(time) ? (
                <div className="flex h-12 content-center items-center justify-center rounded-xl bg-error-500 text-sm font-bold text-white">
                  予約済み
                </div>
              ) : disabledTimeList !== undefined &&
                disabledTimeList.includes(time) ? (
                <div className="flex h-12 content-center items-center justify-center rounded-xl bg-slate-400 text-sm font-bold text-white">
                  予約不可
                </div>
              ) : value !== undefined && value === time ? (
                <div className="flex h-12 content-center items-center justify-center rounded-xl bg-green-400 text-sm font-bold text-white">
                  選択中
                </div>
              ) : (
                <button
                  onClick={() => {
                    onChange && onChange(time);
                  }}
                  className="h-12 w-full"
                >
                  &nbsp;
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

const Timeline = {
  Base,
  Selector: ({
    className,
    disabledTimeList,
    onChange,
    reservedTimeList,
    splitMinute = 60,
  }: Omit<Props, "value">) => {
    const [value, setValue] = useState<undefined | string>(undefined);
    return (
      <Base
        onChange={(value) => {
          setValue(value);
          onChange && onChange(value);
        }}
        reservedTimeList={reservedTimeList}
        disabledTimeList={disabledTimeList}
        splitMinute={splitMinute}
        className={className}
        value={value}
      />
    );
  },
};

export const TimelineBase = Timeline.Base;

export const TimelineSelector = Timeline.Selector;
