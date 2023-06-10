import React from "react";
import { GetWeatherDisplay } from "#/ui/examples/get-weather-display";

// http://localhost:3000/examples/static/cncg/latestdata

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json());
  return [{ period: "latestdata", stationName: "cncg" }].map(
    ({ period, stationName }) => ({
      period,
      stationName,
    })
  );
}

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
