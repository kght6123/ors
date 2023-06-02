import React from "react";
import { GetWeatherDisplay } from '#/ui/examples/get-weather-display';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GetWeatherDisplay stationName="cnarenal" period="latestdata" />
    </main>
  )
}
