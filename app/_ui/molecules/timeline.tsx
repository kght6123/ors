"use client";
import React, { useState } from "react";
import clsx from "clsx";

// TODO: この辺りの問題があるため、他のatomなどと同様にオブジェクトで複数コンポーネントを返せない https://github.com/vercel/next.js/issues/41940

export interface Props {
  splitMinute?: number;
  className?: string;
}

const Base = ({ className }: Props) => {
  return <div className={clsx("relative p-3", className)}></div>;
};

const Timeline = {
  Base,
};

export const TimelineBase = Timeline.Base;
