import { TimelineSelector } from "$/_ui/molecules/timeline";
import { CalendarNow } from "$/_ui/molecules/calendar";

import HeaderFooter from "./_headerFooter";

export default async function Home() {
  return (
    <>
      <HeaderFooter />
      <CalendarNow className="w-full" />
      <TimelineSelector
        disabledTimeList={["14:00"]}
        reservedTimeList={["10:00"]}
        className="w-full"
      />
    </>
  );
}
