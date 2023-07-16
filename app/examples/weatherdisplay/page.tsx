import { WeatherDisplay } from "#/ui/examples/get-weather-display";
import React from "react";

// http://localhost:3000/examples/weatherdisplay

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <WeatherDisplay />
    </main>
  );
}
