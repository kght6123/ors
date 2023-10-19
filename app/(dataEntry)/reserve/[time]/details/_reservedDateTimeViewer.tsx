"use client";
import { CalendarNow } from "$/_ui/molecules/calendar";
import { TimelineSelector } from "$/_ui/molecules/timeline";
import React from "react";

export default function ReservedDateTimeViewer({
  reservedTimeList,
  unixTime,
}: {
  reservedTimeList?: string[];
  unixTime: number;
}) {
  return (
    <>
      <CalendarNow className="w-full" unixTime={unixTime} />
      <TimelineSelector
        className="w-full"
        disabledTimeList={["12:00"]}
        reservedTimeList={reservedTimeList}
        unixTime={unixTime}
      />
    </>
  );
}
