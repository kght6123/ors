"use client";

/**
 * Suspenseで遅延読み込みをするReact.useフック版（クライアント）
 */

import { useState, Suspense, lazy, use } from "react";
import Skeleton from "#/ui/examples/skeleton";

async function fetchWeatherDisplay({
  stationName = "cnarenal",
  period = "latestdata",
}: {
  stationName?: string;
  period?: string;
}) {
  const res = await fetch(
    `https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/${stationName}/?period=${period}`
  );
  await new Promise((resolve) => setTimeout(resolve, 5 * 1000));
  const data = await res.json();
  console.log(data);
  return data;
}

export default function GetWeatherDisplay({
  stationName = "cnarenal",
  period = "latestdata",
}: {
  stationName?: string;
  period?: string;
}) {
  const data = use(fetchWeatherDisplay({ stationName, period }));
  return (
    <div className="h-6 w-20 items-center px-2 text-center text-sm leading-6">
      {data ? (
        <>
          <span
            // https://react.dev/reference/react-dom/hydrate#suppressing-unavoidable-hydration-mismatch-errors
            suppressHydrationWarning={true}
            className="font-semibold tabular-nums text-gray-900 dark:text-gray-100"
          >
            {JSON.stringify(data)}
          </span>
        </>
      ) : null}
    </div>
  );
}

const LazyGetWeatherDisplay = lazy(
  () => import("#/ui/examples/get-weather-display-for-usehook")
);

export function WeatherDisplay() {
  const [period, setPeriod] = useState<string>();
  const [stationName, setStationName] = useState<string>();
  return (
    <>
      <select className="mt-4" onChange={(e) => setPeriod(e.target.value)}>
        <option value="latestdata">latestdata</option>
        <option value="latesthour">latesthour</option>
        <option value="latestday">latestday</option>
        <option value="dailylog">dailylog</option>
      </select>
      <select className="mt-4" onChange={(e) => setStationName(e.target.value)}>
        <option value="cnarenal">cnarenal</option>
        <option value="campastilla">campastilla</option>
        <option value="cncg">cncg</option>
        <option value="cncoloniasp">cncoloniasp</option>
      </select>
      <Suspense fallback={<Skeleton />}>
        <LazyGetWeatherDisplay stationName={stationName} period={period} />
      </Suspense>
    </>
  );
}
