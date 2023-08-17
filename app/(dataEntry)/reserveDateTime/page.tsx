import { TimelineSelector } from "$/_ui/molecules/timeline";
import { CalendarNow } from "$/_ui/molecules/calendar";

import HeaderFooter from "./_headerFooter";
import Clientside from "./_clientside";

export default async function ReserveDateTime() {
  return (
    <>
      <HeaderFooter />
      <CalendarNow className="w-full" />
      <Clientside />
      <TimelineSelector
        disabledTimeList={["14:00"]}
        reservedTimeList={["10:00"]}
        className="w-full"
      />
    </>
  );
}
