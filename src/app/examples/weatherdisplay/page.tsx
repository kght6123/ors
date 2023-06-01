import React from "react";
import { WeatherDisplay } from '#/ui/examples/get-weather-display';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WeatherDisplay />
    </main>
  )
}
