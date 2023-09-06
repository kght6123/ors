"use client";
import { CalendarNow } from "$/_ui/molecules/calendar";
import { TimelineSelector } from "$/_ui/molecules/timeline";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function ReservedDateTimeSelector({
  reservedTimeList,
  unixTime,
}: {
  reservedTimeList?: string[];
  unixTime: number;
}) {
  // const [unixTime, setUnixTime] = useState(Date.now());
  const router = useRouter();
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO: zod-form-dataに書き換える予定
        const formData = new FormData(e.target as HTMLFormElement);
        const unixTime = formData.get("unixTime");
        const date = new Date(
          parseInt(typeof unixTime === "string" ? unixTime : "0")
        );
        if (date.getHours() < 9 || date.getHours() > 20) {
          // 9時から20時までの間で予約可能、それ以外は選択していないとみなす。
          alert("予約時刻を選択してください。");
          return;
        }
        alert(
          "氏名や電話番号の登録が表示されない場合は、画面をリロードして予約日時の選択をやり直して下さい。（NEXT-1160）"
        );
        router.push(`/reserve/${date.getTime().toString()}/details`);
      }}
      id="reservedDateTimeSelectorForm"
    >
      <CalendarNow
        onChange={(unixTime) => {
          // setUnixTime(unixTime);
          router.push(`/reserve?unixTime=${unixTime}`);
        }}
        className="w-full"
        unixTime={unixTime}
      />
      <TimelineSelector
        onChange={(unixTime) => {
          // setUnixTime(unixTime)
          router.push(`/reserve?unixTime=${unixTime}`);
        }}
        className="w-full"
        disabledTimeList={["14:00"]}
        reservedTimeList={reservedTimeList}
        unixTime={unixTime}
      />
      <input name="unixTime" type="hidden" value={unixTime} />
    </form>
  );
}
