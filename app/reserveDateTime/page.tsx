import { TimelineSelector } from "$/_ui/molecules/timeline";
import { CalendarNow } from "$/_ui/molecules/calendar";
import { Container } from "$/_ui/atoms/container";
import { Button } from "$/_ui/atoms/button";

export default async function Home() {
  return (
    <>
      <Container.Floating className="w-screen px-6 py-5" position="top">
        <Button.Basic>Container.Floating</Button.Basic>
      </Container.Floating>
      <CalendarNow className="w-full" />
      <TimelineSelector
        disabledTimeList={["14:00"]}
        reservedTimeList={["10:00"]}
        className="w-full"
      />
      <Container.Floating className="w-screen px-6 py-5" position="bottom">
        <Button.Basic>予約する</Button.Basic>
      </Container.Floating>
    </>
  );
}
