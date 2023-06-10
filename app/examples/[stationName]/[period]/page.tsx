import React from "react";
import GetWeatherDisplay from "#/ui/examples/get-weather-display";

// http://localhost:3000/examples/cncg/latestdata

export default async function Home({
  params,
}: {
  params: { stationName: string; period: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GetWeatherDisplay
        stationName={params.stationName}
        period={params.period}
      />
    </main>
  );
}
