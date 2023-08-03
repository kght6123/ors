"use client";
import React, { useState } from "react";
import clsx from "clsx";

// TODO: この辺りの問題があるため、他のatomなどと同様にオブジェクトで複数コンポーネントを返せない https://github.com/vercel/next.js/issues/41940

export interface Props {
  splitMinute?: number;
  className?: string;
}

const Base = ({ className, splitMinute = 60 }: Props) => {
  const timelines = new Array((12 * 60) / splitMinute);
  return (
    <ul className={clsx("relative flex flex-col", className)}>
      {timelines.map((_value, index) => (
        <li
          className="flex flex-row content-center items-center px-4 py-2 odd:bg-gray-50 even:bg-gray-100"
          key={index}
        >
          <div className="w-16 pr-4 text-right text-sm font-black text-gray-500">
            9:00
          </div>
          <div className="w-full">
            <div className="flex h-12 content-center items-center justify-center rounded-2xl bg-error-500 text-sm font-bold text-white">
              予約済み
            </div>
          </div>
        </li>
      ))}
      <li className="flex flex-row content-center items-center px-4 py-2 odd:bg-gray-50 even:bg-gray-100">
        <div className="w-16 pr-4 text-right text-sm font-black text-gray-500">
          10:00
        </div>
        <div className="w-full">
          <div className="h-12"></div>
        </div>
      </li>
      <li className="flex flex-row content-center items-center px-4 py-2 odd:bg-gray-50 even:bg-gray-100">
        <div className="w-16 pr-4 text-right text-sm font-black text-gray-500">
          11:00
        </div>
        <div className="w-full">
          <div className="flex h-12 content-center items-center justify-center rounded-2xl bg-error-500 text-sm font-bold text-white">
            予約済み
          </div>
        </div>
      </li>
    </ul>
  );
};

const Timeline = {
  Base,
};

export const TimelineBase = Timeline.Base;
