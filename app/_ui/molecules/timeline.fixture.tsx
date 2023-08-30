import { TimelineSelector } from "$/_ui/molecules/timeline";
import React from "react";

export const Fixture = {
  basic: () => (
    <TimelineSelector
      className="w-full"
      disabledTimeList={["14:00"]}
      reservedTimeList={["10:00"]}
    />
  ),
};

export default Fixture;
