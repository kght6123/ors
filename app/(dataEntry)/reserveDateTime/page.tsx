import { TimelineSelector } from "$/_ui/molecules/timeline";
import { CalendarNow } from "$/_ui/molecules/calendar";

export default async function Home() {
  return (
    <>
      <CalendarNow className="w-full" />
      <TimelineSelector
        disabledTimeList={["14:00"]}
        reservedTimeList={["10:00"]}
        className="w-full"
      />
    </>
  );
}
