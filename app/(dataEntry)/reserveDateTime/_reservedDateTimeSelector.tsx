"use client";
import { TimelineSelector } from "$/_ui/molecules/timeline";
import { CalendarNow } from "$/_ui/molecules/calendar";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ReservedDateTimeSelector() {
  const [unixTime, setUnixTime] = useState(Date.now());
  const router = useRouter();
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        // e.stopPropagation();
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const unixTime = formData.get("unixTime");
        alert(unixTime);
        router.push("/registUserInfo");
      }}
      id="reservedDateTimeSelector"
    >
      <CalendarNow
        onChange={(unixTime) => setUnixTime(unixTime)}
        unixTime={unixTime}
        className="w-full"
      />
      <TimelineSelector
        onChange={(unixTime) => setUnixTime(unixTime)}
        reservedTimeList={["10:00"]}
        disabledTimeList={["14:00"]}
        unixTime={unixTime}
        className="w-full"
      />
      <input value={unixTime} name="unixTime" type="hidden" />
    </form>
  );
}
